import { query } from '../../lib';

export default async function handler(req, res) {
  const { id, name, fecha, descripcion } = req.body;
  try {
    const querySql = "UPDATE bugs SET  nombre_bug = ?, fecha , descripcion  WHERE id_bug = ?  ";
    const valuesParams = [name, fecha, descripcion, id];
    await query({ query: querySql, values: valuesParams });

    res.status(200).json({ message: "Bug updated successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}