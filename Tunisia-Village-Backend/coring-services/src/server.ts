import "reflect-metadata";

(BigInt.prototype as any).toJSON = function () {
  return this.toString();
};

import { createApp } from "./app.js";
import http from "http";
import { env } from "./common/config/env.config.js";
import { closeDB } from "./common/db/index.js";

const app = createApp()
const server = http.createServer(app)
server.listen(env.PORT,( ) => {
    console.log(`server is listening on port ${env.PORT}`)
})
async function gracefulShutdown() {
    server.close(async() => {
    console.log("server shuttdown")
      await closeDB()
      process.exit(0);
    })
}
process.on("SIGINT",gracefulShutdown);
process.on("SIGTERM",gracefulShutdown);