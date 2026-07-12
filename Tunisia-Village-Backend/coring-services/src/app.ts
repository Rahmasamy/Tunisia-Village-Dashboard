import express from "express";
import { routes } from "./routes.js";
import { errorHandler } from "./common/error/errorHandler.js";
import { correlationId } from "./common/correlation/correlationId.js";
import cookieParser from "cookie-parser";
import { corsMiddleware } from "./common/cors/cors.js";
import { env } from "./common/config/env.config.js";

export function createApp() {
    const app= express();
    app.use(express.json());
    app.use(cookieParser())
    
    if (env.nodeEnv === "development") {
        app.use(corsMiddleware);
    }

    app.use(correlationId);
    app.use("/api",routes)
     app.use(errorHandler);
    return app;
}