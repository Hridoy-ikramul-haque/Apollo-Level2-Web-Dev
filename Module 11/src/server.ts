
import http, { IncomingMessage, Server, ServerResponse } from 'http';
import config from './config';







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
    if (req.url == "/api" && req.method == "GET") {
        res.writeHead(200, { "content-type": "application/json" });
        res.end(JSON.stringify(
            {
                type: "api",
                url: req.url,
                method:"GET"
            }
        ))
    }
    if (req.url == "/user/data" && req.method == "POST") {
        
        res.writeHead(200, { "type": "application/json" });

        let body = "";
        req.on("data", (chunk) => {
            body += chunk.toString();
        })
        req.on("end", () => {
            try {
                const parseBody = JSON.parse(body);
                console.log(parseBody);
                // res.end(JSON.stringify(parseBody));
                res.end(body);
            } catch (error:any) {
                console.log(error?.message);
            }
        })

        
        
    }
});


server.listen(config.port, () => {
    console.log(`server is runnuing on port:${config.port}.....`);
});

