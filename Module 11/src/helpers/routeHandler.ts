import { IncomingMessage, ServerResponse } from "http";

type routeHandler = (req: IncomingMessage, res: ServerResponse) => void;

export const routes: Map<String, Map<String, routeHandler>> = new Map();

function addRoutes(method:string, path:string, handler:routeHandler) {
    if (!routes.has(method)) routes.set(method, new Map());
    routes.get(method)!.set(path, handler);
    console.log(213123);
}


export default addRoutes;