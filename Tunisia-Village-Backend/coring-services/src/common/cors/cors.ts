import type { NextFunction, Request, Response } from "express";

export function corsMiddleware(req: Request, res: Response, next: NextFunction) {
    const origin = req.headers.origin;
    if (origin) {
        res.setHeader("Access-Control-Allow-Origin", origin);
    }
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With, Correlation-Id");
    
    if (req.method === "OPTIONS") {
        res.sendStatus(200);
        return;
    }
    next();
}
