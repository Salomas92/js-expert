const http = require('http')

const DEFAULT_USER = {
  username: 'Salomas',
  password: '123'
}
const {once} = require('events')
const routes = {
  '/contact:get': (req, res) => {
    res.write('contact us page')
    return res.end()
  },
  '/login:post': async (req, res) => {
    const user = JSON.parse(await once(req, "data"))
    
    if (
      user.username !== DEFAULT_USER.username ||
      user.password !== DEFAULT_USER.password
    ) {
      res.writeHead(401)
      res.end("Logging Faild!")
      return
    }

    return res.end("ok")
  },

  default(req, res) {
    res.writeHead(404)
    return res.end('Not Found!')
  }
}

function handle(req, res) {
  const { url, method } = req
  const routeKey = `${url.toLowerCase()}:${method.toLowerCase()}`
  const chosen = routes[routeKey] || routes.default
  return chosen(req, res)
}

const app = http.createServer(handle)
.listen(3000, () => console.log('running at 3000'))