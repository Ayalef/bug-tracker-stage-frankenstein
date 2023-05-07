import { query } from '../../lib';

export default async function handler(req, res) {
    const  id  = req.body.id;
    try {
      const querySql =  "SELECT id_bug , nombre_bug , fecha , descripcion FROM bugs WHERE id_bug = ? "  ;
      const valuesParams = [id];
      const data = await query({ query: querySql, values: valuesParams });
      
  
      res.status(200).json({ products : data });
   
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }