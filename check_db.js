const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('data/database.sqlite');
db.all("PRAGMA table_info(users)", (err, rows) => {
  console.log(rows);
});
