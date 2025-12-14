import http, { IncomingMessage, Server, ServerResponse } from 'http';

const server: Server = http.createServer((req: IncomingMessage, res: ServerResponse) => {
    if (req.url == '/' && req.method == 'GET') {
        res.writeHead(200, { 'content-type': 'application/json' });
        res.end(JSON.stringify(
            {
                message: 'this is root',
                owner: "hridoy",
                path: req.url
            }
        ));
    }
});

server.listen(8000, () => {
    console.log(`server is runnuing on port:${8000}.....`);
})