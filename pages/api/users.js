import fs from "fs";
import { v4 as uuidv4 } from "uuid";

const dbPath = "./data/users.json";
console.log(dbPath);
export default function handler(req, res) {
  try {
    if (req.method === "POST") {
      let Users = read();
      const id = uuidv4();
      Users.push({ name: req.body.name, id });
      save(Users);
      res.status(200).json(Users);
    }

    if (req.method === "GET") {
      let Users = read();
      res.status(200).json(Users);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

function read() {
  const file = fs.readFileSync(dbPath);
  return JSON.parse(file);
}

function save(data) {
  fs.writeFileSync(dbPath, JSON.stringify(data), (err) => {
    if (err) {
      console.log(err);
      return false;
    }
  });
  return true;
}
