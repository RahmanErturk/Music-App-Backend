import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import homeRouter from "./router/homeRouter.js";
import songRouter from "./router/songRouter.js";
import playlistRouter from "./router/playlistRouter.js";
import artistRouter from "./router/artistRouter.js";

dotenv.config();

const server = express();
const port = process.env.PORT || 4002;

server.use(express.json());
server.use(cors({ origin: "*" }));

server.use("/api", homeRouter);
server.use("/api/songs", songRouter);
server.use("/api/playlists", playlistRouter);
server.use("/api/artists", artistRouter);

server.use((req, res) => res.status(404).end("404 not found"));

server.use((err, req, res, next) => {
  console.log("There is an error!!!" + err.message);
  res.status(500).send("It's not because of you, it's because of me :(");
});

server.listen(port, () => console.log("listening on port " + port));
