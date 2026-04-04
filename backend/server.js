require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const { SESClient, SendEmailCommand } = require('@aws-sdk/client-ses');

const app = express();
const PORT = process.env.PORT || 3001;

// Configuración de AWS SES
const sesClient = new SESClient({
  region: process.env.AWS_REGION || 'us-east-1',
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

// Middlewares de seguridad
app.use(helmet());
app.use(cors({
  origin: process.env.CORS_ORIGIN || 'https://geodesik.cl',
  methods: ['POST'],
}));
app.use(express.json());

// Rate limiting - máximo 5 solicitudes por 15 minutos por IP
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: 'Demasiadas solicitudes desde esta IP, por favor intenta más tarde.',
});

app.use('/api/contact', limiter);

// Endpoint de salud
app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'Geodesik Contact API' });
});

// Endpoint de debug temporal
app.get('/api/debug', (req, res) => {
  res.json({
    env: {
      hasAccessKey: !!process.env.AWS_ACCESS_KEY_ID,
      hasSecretKey: !!process.env.AWS_SECRET_ACCESS_KEY,
      region: process.env.AWS_REGION,
      fromEmail: process.env.SES_FROM_EMAIL,
      toEmail: process.env.SES_TO_EMAIL,
      corsOrigin: process.env.CORS_ORIGIN,
    }
  });
});

// Endpoint de contacto
app.post('/api/contact', async (req, res) => {
  const { nombre, email, telefono, interes, mensaje } = req.body;

  // Validaciones básicas
  if (!nombre || !email || !mensaje || !interes) {
    return res.status(400).json({
      success: false,
      message: 'Por favor completa todos los campos requeridos.',
    });
  }

  // Validar formato de email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      success: false,
      message: 'Por favor ingresa un email válido.',
    });
  }

  try {
    // Preparar el contenido del email
    const emailParams = {
      Source: process.env.SES_FROM_EMAIL || 'ventas@geodesik.cl',
      Destination: {
        ToAddresses: [process.env.SES_TO_EMAIL || 'ventas@geodesik.cl'],
      },
      ReplyToAddresses: [email], // Permite responder directamente al cliente
      Message: {
        Subject: {
          Data: `Nuevo contacto desde geodesik.cl - ${interes}`,
          Charset: 'UTF-8',
        },
        Body: {
          Html: {
            Data: `
              <!DOCTYPE html>
              <html>
                <head>
                  <style>
                    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                    .header { background: linear-gradient(135deg, #B8860B, #8B6914); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
                    .content { background: #f9f9f9; padding: 20px; border: 1px solid #ddd; border-top: none; border-radius: 0 0 8px 8px; }
                    .field { margin-bottom: 15px; }
                    .label { font-weight: bold; color: #B8860B; }
                    .value { margin-top: 5px; padding: 10px; background: white; border-left: 3px solid #B8860B; }
                  </style>
                </head>
                <body>
                  <div class="container">
                    <div class="header">
                      <h2 style="margin:0;">📧 Nuevo mensaje de contacto</h2>
                    </div>
                    <div class="content">
                      <div class="field">
                        <div class="label">👤 Nombre:</div>
                        <div class="value">${nombre}</div>
                      </div>
                      <div class="field">
                        <div class="label">📧 Email:</div>
                        <div class="value"><a href="mailto:${email}">${email}</a></div>
                      </div>
                      ${telefono ? `
                      <div class="field">
                        <div class="label">📱 Teléfono:</div>
                        <div class="value">${telefono}</div>
                      </div>
                      ` : ''}
                      <div class="field">
                        <div class="label">🎯 Producto de interés:</div>
                        <div class="value">${interes}</div>
                      </div>
                      <div class="field">
                        <div class="label">💬 Mensaje:</div>
                        <div class="value">${mensaje}</div>
                      </div>
                      <hr style="margin: 20px 0; border: none; border-top: 1px solid #ddd;">
                      <p style="color: #666; font-size: 12px; margin: 0;">
                        Este mensaje fue enviado desde el formulario de contacto de geodesik.cl
                      </p>
                    </div>
                  </div>
                </body>
              </html>
            `,
            Charset: 'UTF-8',
          },
          Text: {
            Data: `
Nuevo mensaje de contacto - Geodesik

Nombre: ${nombre}
Email: ${email}
${telefono ? `Teléfono: ${telefono}` : ''}
Producto de interés: ${interes}

Mensaje:
${mensaje}

---
Este mensaje fue enviado desde el formulario de contacto de geodesik.cl
            `,
            Charset: 'UTF-8',
          },
        },
      },
    };

    // Enviar email usando AWS SES
    const command = new SendEmailCommand(emailParams);
    await sesClient.send(command);

    res.json({
      success: true,
      message: '¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.',
    });

  } catch (error) {
    console.error('Error al enviar email:', error);
    res.status(500).json({
      success: false,
      message: 'Hubo un error al enviar tu mensaje. Por favor intenta nuevamente.',
    });
  }
});

// Manejo de rutas no encontradas
app.use((req, res) => {
  res.status(404).json({ success: false, message: 'Endpoint no encontrado' });
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor backend corriendo en puerto ${PORT}`);
});
