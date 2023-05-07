import { query } from '../../lib';

export default async function handler(req, res) {
  const { id } = req.body;
  try {
    const querySql = "DELETE FROM bugs WHERE id_bug = ?";
    const valuesParams = [id];
    await query({ query: querySql, values: valuesParams });

    res.status(200).json({ message: "Bug deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}