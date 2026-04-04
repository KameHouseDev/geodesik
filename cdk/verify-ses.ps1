#!/usr/bin/env pwsh
# Verify SES setup and show current status

Write-Host "🔍 Checking SES Configuration..." -ForegroundColor Cyan

$region = "us-east-1"
$email = "ventas@geodesik.cl"
$domain = "geodesik.cl"

# Check email verification
Write-Host "`n📧 Email Verification Status:" -ForegroundColor Yellow
try {
    $emailStatus = aws ses get-identity-verification-attributes --identities $email --region $region | ConvertFrom-Json
    $status = $emailStatus.VerificationAttributes.$email.VerificationStatus
    
    if ($status -eq "Success") {
        Write-Host "  ✅ $email is VERIFIED" -ForegroundColor Green
    } else {
        Write-Host "  ⚠️  $email is NOT verified (Status: $status)" -ForegroundColor Yellow
        Write-Host "     Check your email and click the verification link" -ForegroundColor Gray
    }
} catch {
    Write-Host "  ❌ Could not check email status" -ForegroundColor Red
}

# Check domain verification
Write-Host "`n🌐 Domain Verification Status:" -ForegroundColor Yellow
try {
    $domainStatus = aws ses get-identity-verification-attributes --identities $domain --region $region | ConvertFrom-Json
    $status = $domainStatus.VerificationAttributes.$domain.VerificationStatus
    
    if ($status -eq "Success") {
        Write-Host "  ✅ $domain is VERIFIED" -ForegroundColor Green
    } else {
        Write-Host "  ⚠️  $domain is NOT verified (Status: $status)" -ForegroundColor Yellow
        Write-Host "     Add DKIM records to your DNS" -ForegroundColor Gray
    }
} catch {
    Write-Host "  ℹ️  Domain verification not configured (optional)" -ForegroundColor Gray
}

# Check sandbox status
Write-Host "`n🏖️  Sandbox Status:" -ForegroundColor Yellow
try {
    $account = aws sesv2 get-account --region $region | ConvertFrom-Json
    
    if ($account.ProductionAccessEnabled) {
        Write-Host "  ✅ Production access ENABLED - you can send to any email" -ForegroundColor Green
    } else {
        Write-Host "  ⚠️  Still in SANDBOX mode - can only send to verified emails" -ForegroundColor Yellow
        Write-Host "     Request production access in SES console" -ForegroundColor Gray
    }
} catch {
    Write-Host "  ⚠️  Could not check sandbox status" -ForegroundColor Yellow
}

# Check send quota
Write-Host "`n📊 Send Statistics:" -ForegroundColor Yellow
try {
    $quota = aws ses get-send-quota --region $region | ConvertFrom-Json
    Write-Host "  Max emails per day: $($quota.Max24HourSend)" -ForegroundColor Cyan
    Write-Host "  Sent in last 24h: $($quota.SentLast24Hours)" -ForegroundColor Cyan
    Write-Host "  Max send rate: $($quota.MaxSendRate)/second" -ForegroundColor Cyan
} catch {
    Write-Host "  ⚠️  Could not retrieve quota information" -ForegroundColor Yellow
}

Write-Host "`n✨ Status check complete!" -ForegroundColor Green
