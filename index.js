import 'dotenv/config'; // Parses .env files in my code and adds them to the environment
import express from 'express'; // Imports the express function
import pkg from 'pg'; // Import the entire pg module
const { Pool } = pkg; // Destructures the Pool class from the pg module
const port = 5000; // Assigns value to port
const app = express(); // Creates app object (main entry for the app)

app.get('/', (req, res) => {
  const pool = new Pool({
    connectionString: process.env.PG_URI
  }); // create a new pool to connect to PG (via ElephantSQL)
  pool.query('SELECT NOW()', (err, res) => {
    console.log(err, res);
    pool.end();
  }); // Test query
}); // Main router handler

app.listen(port, () => console.log(`Server running on port ${port}`)); // Starts listening on port
