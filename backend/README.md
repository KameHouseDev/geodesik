# Backend - Geodesik Contact API

Backend API para procesar el formulario de contacto de Geodesik.

## 🚀 Tecnologías

- **Node.js** + **Express**
- **AWS SES** para envío de emails
- **Helmet** para seguridad
- **CORS** configurado
- **Rate limiting** contra spam

## 📦 Instalación Local

```bash
cd backend
npm install
cp .env.example .env
# Editar .env con tus credenciales AWS
npm run dev
```

## 🔐 Variables de Entorno Requeridas

```env
PORT=3001
AWS_REGION=us-east-1
AWS_ACCESS_KEY_ID=tu_access_key
AWS_SECRET_ACCESS_KEY=tu_secret_key
SES_FROM_EMAIL=ventas@geodesik.cl
SES_TO_EMAIL=ventas@geodesik.cl
CORS_ORIGIN=https://geodesik.cl
```

##endpoints

- **POST /api/contact** - Enviar formulario de contacto
- **GET /health** - Verificar estado del servidor

## 📧 Configurar AWS SES

1. Ir a AWS Console → SES
2. Verificar el dominio `geodesik.cl`
3. Verificar el email `ventas@geodesik.cl`
4. Salir del sandbox (opcional, para producción)
5. Crear IAM user con permisos de SES
6. Copiar Access Key y Secret Key a `.env`

## 🔒 Seguridad

- Rate limiting: máximo 5 requests por 15 minutos por IP
- Validación de datos del formulario
- CORS configurado solo para geodesik.cl
- Headers de seguridad con Helmet

## 🚀 Despliegue

El despliegue es automático via GitHub Actions cuando se hace push a `main`.
El backend se despliega en `/var/www/backend/` y se ejecuta con PM2.
