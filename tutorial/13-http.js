const http = require('http');

const server = http.createServer((req, res)=>{
  if(req.url === '/'){
    res.end('Welcome to our own page')
  }
  if(req.url ==='/about'){
    res.end('Here is our short story')
  }
  res.end(`
  <h1>Ooops!</h1>
  <p>We can't seem to fin the page you are looking for </p>
  <a href="/">Back home</a>
  `)
})

server.listen(5000)