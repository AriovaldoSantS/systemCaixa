// ListarProdutos.js
const db = require('./database'); // Caminho para o arquivo database.js

const listarProdutos = () => {
  return new Promise((resolve, reject) => {
    db.all('SELECT * FROM produtos', (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
};

module.exports = listarProdutos;
