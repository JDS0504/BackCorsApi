const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres', 
  host: 'localhost',
  database: 'apijwt', 
  password: 'javier', 
  port: 5432,
});

module.exports = pool;