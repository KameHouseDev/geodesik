#!/usr/bin/env pwsh
# Quick deployment script for geodesik infrastructure

Write-Host "🚀 Deploying Geodesik Infrastructure..." -ForegroundColor Cyan

# Check if AWS CLI is configured
try {
    aws sts get-caller-identity | Out-Null
} catch {
    Write-Host "❌ AWS CLI not configured. Run: aws configure" -ForegroundColor Red
    exit 1
}

# Install dependencies
Write-Host "`n📦 Installing dependencies..." -ForegroundColor Yellow
npm install

# Bootstrap CDK if needed (safe to run multiple times)
Write-Host "`n🥾 Bootstrapping CDK..." -ForegroundColor Yellow
cdk bootstrap

# Show diff
Write-Host "`n🔍 Changes to be deployed:" -ForegroundColor Yellow
npm run diff

# Ask for confirmation
$confirmation = Read-Host "`n❓ Deploy these changes? (y/n)"
if ($confirmation -ne 'y') {
    Write-Host "❌ Deployment cancelled" -ForegroundColor Red
    exit 0
}

# Deploy
Write-Host "`n🚀 Deploying stacks..." -ForegroundColor Green
npm run deploy -- --require-approval never

Write-Host "`n✅ Deployment complete!" -ForegroundColor Green
Write-Host "
📝 Next steps:
1. Check your email (ventas@geodesik.cl) and verify it
2. Copy the outputs above (AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY)
3. Add them to GitHub Secrets
4. Add DKIM records to Lightsail DNS
5. Request production access in SES console
" -ForegroundColor Cyan
