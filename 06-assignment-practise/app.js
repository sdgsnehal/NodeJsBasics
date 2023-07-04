const http = require('http')

const server = http.createServer((req, res) => {
    const url = req.url
    const method = req.method
    if(url ==='/'){
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write('<body><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Send</button></form></body>')
       return res.end()
    
    }
    if(url ==='/create-user' && method === 'POST'){
        const body = []
        req.on('data', (chunk) => {
            body.push(chunk)
            console.log(chunk)
        })
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString()
            console.log(parsedBody.split('=')[1])
        })
        res.statusCode = 302
        res.setHeader('Location', '/')
        return res.end()
    }

    

    if(url ==='/about'){
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write('<li>user 1</li>')
       return res.end()
    
    
    }
})
server.listen(3000)