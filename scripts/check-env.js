const required = ['VITE_RECAPTCHA_SITE_KEY']
const missing = required.filter((name) => !process.env[name])
if (missing.length > 0) {
  console.error(`Missing required env vars: ${missing.join(', ')}`)
  process.exit(1)
}
console.log('All required env vars are present.')
