import addRoutes from "../helpers/routeHandler";
import sendJson from "../sendJson";

addRoutes('GET', '/', (req, res) => {
    sendJson(res, 200, {
        message: "root route using addRoutes function and sendJson",
        owner: "hridoy",
        path: req.url
    })
});

addRoutes('GET', '/abir', (req, res) => {
    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify(
        {
            message: "Abir orfe dudukha",
            owner: "hridoy",
            path: req.url
        }
    ))
});



addRoutes('GET', '/api', (req, res) => {
    sendJson(res, 200, {
        type: "api",
        url: req.url,
        method: "GET"
    })
});