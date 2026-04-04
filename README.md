# 🌍 Geodesik.cl

Sitio web corporativo para Geodesik - Servicios de topografía y geomensura profesional.

## 🚀 Stack Tecnológico

- **Frontend**: React + Vite + TailwindCSS
- **Backend**: Node.js + Express
- **Email**: AWS SES + Zoho Mail
- **Hosting**: Amazon Lightsail
- **CI/CD**: GitHub Actions
- **IaC**: AWS CDK (TypeScript)

## 📁 Estructura del Proyecto

```
geodesik/
├── src/                      # Código fuente del frontend (React)
│   ├── components/          # Componentes React
│   └── assets/             # Imágenes y recursos
├── backend/                 # API backend (Express + SES)
│   ├── server.js           # Servidor principal
│   └── package.json        # Dependencias backend
├── cdk/                    # Infraestructura AWS (CDK)
│   ├── lib/               # Stacks de SES e IAM
│   └── bin/               # App principal CDK
├── .github/workflows/     # GitHub Actions CI/CD
└── dist/                  # Build del frontend (generado)
```

## 🛠️ Desarrollo Local

### Prerequisitos
- Node.js 18+
- npm

### Instalación

```bash
# Instalar dependencias del frontend
npm install

# Instalar dependencias del backend
cd backend
npm install
cd ..
```

### Ejecutar en desarrollo

```bash
# Frontend (puerto 5173)
npm run dev

# Backend (puerto 3001)
cd backend
npm start
```

## 🚀 Deployment

El proyecto se despliega automáticamente a Amazon Lightsail cuando haces push a `main`.

### Configuración de Infraestructura AWS

Ver [CDK_QUICKSTART.md](CDK_QUICKSTART.md) para deployment automático de infraestructura.

O ver [CONFIGURACION_FORMULARIO.md](CONFIGURACION_FORMULARIO.md) para configuración manual.

### Build Manual

```bash
# Build del frontend
npm run build

# Los archivos estáticos estarán en dist/
```

## 📧 Formulario de Contacto

El formulario de contacto usa AWS SES para enviar emails y Zoho Mail para gestionar el buzón empresarial.

### 🚀 Configuración:
- **AWS SES:** Envío de emails desde el formulario (gratis desde Lightsail)
- **Zoho Mail:** Buzón completo ventas@geodesik.cl (gratis)
- **Reply-To automático:** Responde directamente a clientes desde Zoho

### Incluye:
- ✅ Formulario web → Email automático
- ✅ Buzón completo ventas@geodesik.cl
- ✅ Responder directamente a clientes
- ✅ Acceso vía webmail o cliente de correo
- 💰 $0 USD/mes (plan gratuito)

### Documentación:
- [SETUP-EMAIL.md](./SETUP-EMAIL.md) - Guía de configuración
- [cdk/README.md](./cdk/README.md) - Infraestructura CDK

## 🔐 GitHub Secrets Requeridos

```
LIGHTSAIL_IP              # IP del servidor (52.0.245.15)
LIGHTSAIL_SSH_KEY         # Clave SSH privada (nunca commitear)
AWS_ACCESS_KEY_ID         # Credencial IAM para SES
AWS_SECRET_ACCESS_KEY     # Secret de IAM
SES_FROM_EMAIL            # Email de remitente (ventas@geodesik.cl)
SES_TO_EMAIL              # Email destinatario (ventas@geodesik.cl)
```

## 🌐 URLs

- **Producción**: https://geodesik.cl
- **API Health**: https://geodesik.cl/api/health

## 📝 Scripts Disponibles

```bash
# Frontend
npm run dev          # Servidor de desarrollo
npm run build        # Build para producción
npm run preview      # Preview del build

# Backend
cd backend
npm start            # Iniciar servidor backend
npm run dev          # Con auto-reload (opcional)

# CDK
cd cdk
npm run deploy       # Desplegar infraestructura
npm run diff         # Ver cambios pendientes
npm run destroy      # Eliminar infraestructura
```

## 🐛 Troubleshooting

### El formulario no envía emails
```bash
# Verificar status de SES
cd cdk
.\verify-ses.ps1
```

### Ver logs del backend en producción
```bash
ssh admin@52.0.245.15
pm2 logs geodesik-backend
```

## 💰 Costos Estimados

- **Lightsail**: $3.50-5/mes
- **SES**: Gratis (hasta 62,000 emails/mes desde Lightsail)
- **Route53/DNS**: ~$0.50/mes

**Total: ~$5/mes**

## 📄 Licencia

Propietario - Geodesik © 2026