
import http, { IncomingMessage, Server, ServerResponse } from 'http';
import config from './config';
import addRoutes, { routes } from './helpers/routeHandler';
import './routes/allroutes';



const server: Server = http.createServer((req: IncomingMessage, res: ServerResponse) => {
    const method = req.method?.toUpperCase() || "";
    const path = req.url || "";
    const methodMap = routes.get(method);
    const handler = methodMap?.get(path);

    if (handler)
    {
        handler(req, res);
    } else {
        res.writeHead(404, { "content-type": "application/json" });
        res.end(JSON.stringify(
            {
                success: false,
                message: "Route not found",
                path
            }
        ))
    }

    
    
    // if (req.url == "/user/data" && req.method == "POST") {
        
    //     res.writeHead(200, { "type": "application/json" });

    //     let body = "";
    //     req.on("data", (chunk) => {
    //         body += chunk.toString();
    //     })
    //     req.on("end", () => {
    //         try {
    //             const parseBody = JSON.parse(body);
    //             console.log('se changes');
    //             console.log(parseBody);
    //             // res.end(JSON.stringify(parseBody));
    //             res.end(body);
    //         } catch (error:any) {
    //             console.log(error?.message);
    //         }
    //     })

        
        
    // }
});


server.listen(config.port, () => {
    console.log(`server is runnuing on port:${config.port}.....`);
});

