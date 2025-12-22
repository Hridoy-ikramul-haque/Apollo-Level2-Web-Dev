
import http, { IncomingMessage, Server, ServerResponse } from 'http';
import config from './config';
import addRoutes, { routes } from './helpers/routeHandler';
import './routes/allroutes';


function findDynamicRoute(method: string, url: string) {
    const methodMap = routes.get(method);
    if (!methodMap) return null;
    for (const [routePath, handler] of methodMap) {
        const routeParts = routePath.split('/');
        const urlParts = url.split('/');

        
    }
}


const server: Server = http.createServer((req: IncomingMessage, res: ServerResponse) => {
    const method = req.method?.toUpperCase() || "";
    const path = req.url || "";
    const methodMap = routes.get(method);
    const handler = methodMap?.get(path);
    console.log("hridoy");

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
});


server.listen(config.port, () => {
    console.log(`server is runnuing on port:${config.port}.....`);
});

