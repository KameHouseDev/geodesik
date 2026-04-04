# 🚀 Geodesik AWS Infrastructure (CDK)

Este proyecto contiene la infraestructura como código (IaC) para Geodesik usando AWS CDK.

## 📦 ¿Qué despliega?

- **SES (Simple Email Service)**: Configuración de email y dominio para el formulario de contacto
- **IAM**: Usuario con permisos específicos para enviar emails vía SES
- **Outputs**: Credenciales y configuración para GitHub Secrets

## 🛠️ Prerequisitos

1. **Node.js** 18+ instalado
2. **AWS CLI** configurado con credenciales de administrador:
   ```powershell
   aws configure
   ```
3. **AWS CDK** instalado globalmente:
   ```powershell
   npm install -g aws-cdk
   ```

## 📥 Instalación

```powershell
cd cdk
npm install
```

## 🚀 Deployment

### 1. Bootstrap CDK (solo la primera vez)
```powershell
cdk bootstrap aws://ACCOUNT-ID/us-east-1
```

### 2. Ver los cambios que se aplicarán
```powershell
npm run diff
```

### 3. Desplegar la infraestructura
```powershell
npm run deploy
```

Esto desplegará:
- ✅ `GeodesikSesStack` - Configuración de SES
- ✅ `GeodesikIamStack` - Usuario IAM con credenciales

### 4. Copiar los Outputs

Después del deployment, verás outputs importantes:

```
Outputs:
GeodesikIamStack.AccessKeyId = AKIAIOSFODNN7EXAMPLE
GeodesikIamStack.SecretAccessKey = wJalrXUtnFEMI/K7MDENG/bPxRfiCY...
GeodesikIamStack.FromEmail = ventas@geodesik.cl
GeodesikIamStack.ToEmail = ventas@geodesik.cl
GeodesikSesStack.DkimTokens = token1,token2,token3
```

⚠️ **COPIA EL `SecretAccessKey` INMEDIATAMENTE** - No podrás verlo después.

## 🔐 Configurar GitHub Secrets

1. Ve a: `https://github.com/tu-usuario/geodesik/settings/secrets/actions`
2. Agrega estos secretos:

| Secret Name | Valor del Output |
|-------------|------------------|
| `AWS_ACCESS_KEY_ID` | `GeodesikIamStack.AccessKeyId` |
| `AWS_SECRET_ACCESS_KEY` | `GeodesikIamStack.SecretAccessKey` |
| `SES_FROM_EMAIL` | `GeodesikIamStack.FromEmail` |
| `SES_TO_EMAIL` | `GeodesikIamStack.ToEmail` |

Los secretos `LIGHTSAIL_SSH_KEY` y `LIGHTSAIL_IP` ya deberían existir.

## 📧 Verificar Email en SES

1. **Revisa tu email** `ventas@geodesik.cl`
2. Busca el email de AWS SES con asunto: **"Amazon SES Email Verification"**
3. **Haz clic en el enlace** de verificación
4. Deberías ver: "Congratulations! Your email address has been successfully verified"

## 🌐 Agregar registros DNS (DKIM)

AWS SES te da 3 tokens DKIM. Agrégalos a tu zona DNS en Lightsail:

1. Ve a: **Lightsail** → **Networking** → **DNS zones** → **geodesik.cl**
2. Por cada token en `GeodesikSesStack.DkimTokens`, agrega un registro CNAME:

   | Nombre | Tipo | Valor |
   |--------|------|-------|
   | `token1._domainkey.geodesik.cl` | CNAME | `token1.dkim.amazonses.com` |
   | `token2._domainkey.geodesik.cl` | CNAME | `token2.dkim.amazonses.com` |
   | `token3._domainkey.geodesik.cl` | CNAME | `token3.dkim.amazonses.com` |

## 🏖️ Salir del Sandbox de SES

Por defecto, SES está en "sandbox mode" y solo puedes enviar a emails verificados.

1. Ve a: https://console.aws.amazon.com/ses/
2. **Account dashboard** (menú lateral)
3. Si dice "Sandbox", clic en **"Request production access"**
4. Llena el formulario:
   - **Mail type**: Transactional
   - **Website URL**: https://geodesik.cl
   - **Use case**: "Formulario de contacto del sitio web para recibir consultas"
5. **Submit request**

⏱️ Normalmente aprueban en 24-48 horas.

## 🧪 Probar el Formulario

Una vez que:
- ✅ Email verificado
- ✅ GitHub Secrets configurados
- ✅ Deployment de backend completado (push a GitHub)

Prueba:
1. Ve a https://geodesik.cl
2. Scroll a la sección de contacto
3. Llena el formulario y envía
4. Deberías recibir el email en `ventas@geodesik.cl`

## 🔍 Comandos Útiles

```powershell
# Ver cambios antes de desplegar
npm run diff

# Desplegar todo
npm run deploy

# Ver la plantilla CloudFormation generada
npm run synth

# Destruir toda la infraestructura (¡cuidado!)
npm run destroy
```

## 📁 Estructura del Proyecto

```
cdk/
├── bin/
│   └── geodesik-infra.ts    # App principal
├── lib/
│   ├── ses-stack.ts          # Stack de SES
│   └── iam-stack.ts          # Stack de IAM
├── package.json
├── cdk.json
└── tsconfig.json
```

## 🐛 Troubleshooting

### Error: "Unable to resolve AWS account to use"
```powershell
aws configure
# Ingresa tus credenciales de AWS
```

### Error: "Need to perform AWS calls for account..."
```powershell
cdk bootstrap
```

### ¿Cómo verifico que el email está verificado?
```powershell
aws ses list-identities --region us-east-1
aws ses get-identity-verification-attributes --identities ventas@geodesik.cl --region us-east-1
```

### ¿Cómo reviso el estado del sandbox?
```powershell
aws sesv2 get-account --region us-east-1
# Busca "ProductionAccessEnabled": true/false
```

## 💰 Costos

- **AWS SES**: Gratis (primeros 62,000 emails/mes desde Lightsail)
- **IAM User**: Gratis
- **CloudFormation**: Gratis

**Total: $0/mes** 🎉

## 🔄 Actualizar la Infraestructura

Si necesitas cambiar algo (ej: agregar otro email):

1. Edita `bin/geodesik-infra.ts` o los stacks en `lib/`
2. `npm run diff` para ver cambios
3. `npm run deploy` para aplicar

CDK solo actualizará lo que cambió.

## 🗑️ Eliminar Todo

⚠️ **CUIDADO**: Esto eliminará toda la configuración de SES e IAM.

```powershell
npm run destroy
```

## 📚 Recursos

- [AWS CDK Documentation](https://docs.aws.amazon.com/cdk/)
- [AWS SES Documentation](https://docs.aws.amazon.com/ses/)
- [Lightsail DNS](https://lightsail.aws.amazon.com/ls/webapp/home/domains)
