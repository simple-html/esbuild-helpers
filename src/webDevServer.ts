import express from "express";
import compression from "compression";
import { constants } from "zlib";
import { log } from "./log";

export function startDevServer(port: number, distFolder: string) {
  const app = express();

  app.use(
    compression({
      threshold: 1,
      flush: constants.Z_SYNC_FLUSH,
    })
  );

  app.use(
    express.static(distFolder, {
      etag: false,
      maxAge: "5",
    })
  );

  app.listen(port, () => {
    log("DEVSERVER", "started, listening on http://127.0.0.1:" + port);
  });
}