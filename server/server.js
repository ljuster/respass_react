// https://www.apollographql.com/docs/apollo-server/example.html
const express = require('express')
const path = require('path')
const basicAuth = require('./basic-auth-middleware.js')
const port = process.env.PORT || 3001

// Initialize the app
const app = express()
app.use(basicAuth)
app.use(express.static(path.join(__dirname, '/../public')))
app.use('*', (req, resp) => resp.sendFile('/public/index.html'))

// Start the server
app.listen(port, () => {
  process.env.NODE_ENV === 'production'
    ? console.log(`Heroku app is up and running on port ${port}.`)
    : console.log(`Go to http://localhost:${port} to view pacing dashboard!`)
})
