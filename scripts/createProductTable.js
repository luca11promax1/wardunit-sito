require('dotenv').config();
const mysql = require('mysql2/promise');

async function main() {
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT || 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });

  const createTableSQL = `
    CREATE TABLE IF NOT EXISTS Product (
      id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      description TEXT,
      price DOUBLE NOT NULL,
      image_url VARCHAR(512),
      active BOOLEAN NOT NULL DEFAULT TRUE,
      created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    );
  `;

  try {
    await connection.execute(createTableSQL);
    console.log('Tabella Product creata (o già esistente)!');
  } catch (err) {
    console.error('Errore nella creazione della tabella Product:', err.message);
  } finally {
    await connection.end();
  }
}

main(); 