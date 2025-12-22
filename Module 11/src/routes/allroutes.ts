import { readUser, writeUser } from "../helpers/fileDb";
import parseBody from "../helpers/ParseBody";
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

    

addRoutes('POST', '/user/api', async (req, res) => {
    let data = await parseBody(req);
    const users = readUser();
    console.log(users);
    const newUser = {
        id: Date.now(),
        ...data
    }
    users.push(newUser);
    writeUser(users);
    console.log(users);
    sendJson(res, 201, { success: true, data: data });

});

