import { query } from '../../lib';

export default async function handler(req, res) {
  const { id } = req.body;
  try {
    // Primero eliminar todos los bugs asociados al proyecto
    let querySql = "DELETE FROM bugs WHERE id_proyecto = ?";
    let valuesParams = [id];
    await query({ query: querySql, values: valuesParams });

    // Luego eliminar el proyecto
    querySql = "DELETE FROM proyectos WHERE id_proyecto = ?";
    valuesParams = [id];
    await query({ query: querySql, values: valuesParams });

    res.status(200).json({ message: "Project and associated bugs deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}