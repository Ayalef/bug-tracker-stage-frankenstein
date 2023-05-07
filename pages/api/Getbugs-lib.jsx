
import { query } from '../../lib';

export default async function handler(req, res) {
  const  id  = req.body.id;
  try {
    const querySql = " SELECT proyectos.id_proyecto,  proyectos.nombre_proyecto, GROUP_CONCAT(bugs.nombre_bug SEPARATOR ', '),  GROUP_CONCAT(bugs.id_bug SEPARATOR ', '),  GROUP_CONCAT(todo.nombre_todo SEPARATOR ', '),GROUP_CONCAT(todo.todo_id SEPARATOR ', ')FROM proyectos JOIN bugs ON proyectos.id_proyecto = bugs.id_proyecto JOIN todo ON proyectos.id_proyecto = todo.id_proyecto WHERE proyectos.id_proyecto = ? GROUP BY proyectos.id_proyecto ";
    const valuesParams = [id];
    const data = await query({ query: querySql, values: valuesParams });
    

    res.status(200).json({ products: data });
 
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}