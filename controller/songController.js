import { Low } from "lowdb";
import { JSONFile } from "lowdb/node";

const db = new Low(new JSONFile("db/data.json"));

export const getAllSongs = async (req, res) => {
  await db.read();

  res.status(200).json(db.data.songs);
};

export const getSong = async (req, res) => {
  await db.read();

  const song = db.data.songs.find((s) => s.id === +req.params.id);

  if (!song) return res.status(404).json("Not Found");

  res.json(song);
};
