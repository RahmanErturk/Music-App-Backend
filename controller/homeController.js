import { Low } from "lowdb";
import { JSONFile } from "lowdb/node";

const db = new Low(new JSONFile("db/data.json"));

export const getAllData = async (req, res) => {
  await db.read();

  res.status(200).json(db.data);
};
