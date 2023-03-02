import nextConnect from 'next-connect';
import mysql2 from 'mysql2';

const handler = nextConnect();

handler.get((req, res) => {
  // Establish connection to the database
  const connection = mysql2.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'pinpon77',
    database: 'issues'
  });

  connection.connect();

  // Query the database for all bugs
  const query = `SELECT * FROM bugs`;
  connection.query(query, function (error, results, fields) {
    if (error) {
      console.log(error);
      res.status(500).json({ message: 'Failed to get bugs' });
      return;
    }

    // Send the results back to the client
    res.status(200).json(results);
  });

  // Close the database connection
  connection.end();
});

export default handler;