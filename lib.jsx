import mysql2 from 'mysql2/promise';

export  async function query({ query, values = []}) {
  
  const dbconnection = await mysql2.createConnection ({
    host: '127.0.0.1',
    user: 'root',
    password: 'pinpon77',
    database: 'issues'
  });
  try {
    
    const [results] = await dbconnection.execute(query,values);
    dbconnection.end();
    return results;  
}   catch (error) {
    throw Error(error.message);
    return { error };
  }
}


