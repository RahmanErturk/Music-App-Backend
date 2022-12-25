import express from "express";
import * as controller from "../controller/songController.js";

const router = express.Router();

router.get("/", controller.getAllSongs).get("/:id", controller.getSong);

export default router;
