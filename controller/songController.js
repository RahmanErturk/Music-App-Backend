import { Low } from "lowdb";
import { JSONFile } from "lowdb/node";

const db = new Low(new JSONFile("db/data.json"));

export const getAllSongs = async (req, res) => {
  await db.read();

  res.status(200).json(db.data.songs);
};

export const editSong = async (req, res) => {
  await db.read();

  const index = db.data.songs.findIndex((s) => s.id === +req.params.id);

  if (index < 0) return res.status(404).json("Not Found!");

  db.data.songs[index] = { ...db.data.songs[index], ...req.body };

  await db.write();

  res.status(202).json(`Playlist ${db.data.songs[index].name} is updated.`);
};
