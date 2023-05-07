import { query } from '../../lib';

export default async function handler(req, res) {
    const  id  = req.body.id;
    try {
      const querySql =  "SELECT todo_id , nombre_todo , fecha , descripcion FROM todo WHERE todo_id = ? "  ;
      const valuesParams = [id];
      const data = await query({ query: querySql, values: valuesParams });
      
  
      res.status(200).json({ products : data });
   
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }