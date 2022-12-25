import { Low } from "lowdb";
import { JSONFile } from "lowdb/node";

const db = new Low(new JSONFile("db/data.json"));

export const getAllArtists = async (req, res) => {
  await db.read();

  res.status(200).json(db.data.artists);
};

export const getArtist = async (req, res) => {
  await db.read();

  const artist = db.data.artists.find((a) => a.id === +req.params.id);

  if (!artist) return res.status(404).json("Not Found");

  res.json(artist);
};
