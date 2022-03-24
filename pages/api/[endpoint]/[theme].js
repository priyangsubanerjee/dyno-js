import getDynos from "../../../db/getDynos";
import getTemplate from "../../../templates/getTemplate";

export default async function handler(req, res) {
  const { endpoint } = req.query;
  const { theme } = req.query;
  const template = getTemplate(await getDynos(endpoint), theme);
  res.send(template);
}
