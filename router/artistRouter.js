import express from "express";
import * as controller from "../controller/artistController.js";

const router = express.Router();

router.get("/", controller.getAllArtists).get("/:id", controller.getArtist);

export default router;
