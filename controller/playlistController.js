import { Low } from "lowdb";
import { JSONFile } from "lowdb/node";

const db = new Low(new JSONFile("db/data.json"));

export const getAllPlaylists = async (req, res) => {
  await db.read();

  res.status(200).json(db.data.playlists);
};

export const getPlaylist = async (req, res) => {
  await db.read();

  const playlist = db.data.playlists.find((pl) => pl.id === +req.params.id);

  if (!playlist) return res.status(404).json("Not Found!");

  res.json(playlist);
};

export const createPlaylist = async (req, res) => {
  await db.read();

  const nextID = Math.max(...db.data.playlists.map((pl) => pl.id)) + 1;

  db.data.playlists.push({ ...req.body, id: nextID });

  db.write();

  res.status(201).json(`Playlist ${req.body.name} created successfully.`);
};

export const editPlaylist = async (req, res) => {
  await db.read();

  const index = db.data.playlists.findIndex((pl) => pl.id === +req.params.id);

  if (index < 0) return res.status(404).json("Not Found!");

  db.data.playlists[index] = { ...db.data.playlists[index], ...req.body };

  await db.write();

  res.status(202).json(`Playlist ${db.data.playlist[index].name} is updated.`);
};

export const deletePlaylist = async (req, res) => {
  await db.read();

  const index = db.data.playlists.findIndex((pl) => pl.id === +req.params.id);

  if (index < 0) return res.status(404).json("Not Found!");

  db.data.playlists.splice(index, 1);

  db.write();

  res.status(202).json(`Playlist ${db.data.playlist[index].name} is deleted.`);
};
