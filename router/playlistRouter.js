import express from "express";
import * as controller from "../controller/playlistController.js";

const router = express.Router();

router
  .get("/", controller.getAllPlaylists)
  .get("/:id", controller.getPlaylist)
  .post("/", controller.createPlaylist)
  .put("/:id", controller.editPlaylist)
  .delete("/:id", controller.deletePlaylist);

export default router;
