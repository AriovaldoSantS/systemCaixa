// database.js
const sqlite3 = require('sqlite3').verbose();

// Cria ou conecta ao banco de dados SQLite
const db = new sqlite3.Database('./database.sqlite');

// Cria a tabela de produtos se ainda não existir
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS produtos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT,
    valor REAL
  )`);

  // Exemplo: Inserir alguns produtos
  const stmt = db.prepare('INSERT INTO produtos (nome, valor) VALUES (?, ?)');
  stmt.run('Produto A', 10.5);
  stmt.run('Produto B', 7.25);
  stmt.run('Produto C', 15.0);
  stmt.finalize();

  console.log('Banco de dados SQLite configurado.');
});

module.exports = db;
