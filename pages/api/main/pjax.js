import fs from "fs";
export default async function handler(req, res) {
  const java = fs.readFileSync("./db/getDynos.js", "utf8");
  res.setHeader("Content-Type", "text/javascript");
  res.send(java);
}
