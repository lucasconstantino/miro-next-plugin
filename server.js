const express = require('express')
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const getPage = req =>
  req.originalUrl
    .split('?')
    .shift()
    .split('#')
    .shift()
    .replace('.html', '')

app.prepare().then(() => {
  const server = express()

  server.get('/*.html', (req, res) =>
    app.render(req, res, getPage(req), req.query)
  )

  server.get('*', (req, res) => handle(req, res))

  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
