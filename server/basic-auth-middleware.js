const auth = require('basic-auth')
const timingSafeCompare = require('tsscmp')

const check = function check (name, pass) {
  return timingSafeCompare(name, process.env.BASIC_AUTH_NAME || 'admin') &&
  timingSafeCompare(pass, process.env.BASIC_AUTH_PASS || 'hyfn84life')
}

const basicAuth = function basicAuth (req, res, next) {
  const credentials = auth(req)
  if (!credentials || !check(credentials.name, credentials.pass)) {
    res.set('WWW-Authenticate', 'Basic realm="example"')
    res.status(401).send('Nope - Access denied!')
  } else {
    return next()
  }
}

module.exports = basicAuth
