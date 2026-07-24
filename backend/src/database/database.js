import Database from "better-sqlite3";
import path from "path";
import fs from "fs";



/*
|--------------------------------------------------------------------------
| Dossier de données
|--------------------------------------------------------------------------
|
| Docker :
| /opt/docker/poussieredantan/data
|       ↓
| /app/data dans le container
|
*/


const dataDir = path.join(
  process.cwd(),
  "data"
);





/*
|--------------------------------------------------------------------------
| Création automatique du dossier data
|--------------------------------------------------------------------------
*/


if (!fs.existsSync(dataDir)) {

  fs.mkdirSync(dataDir, {
    recursive: true
  });

}





/*
|--------------------------------------------------------------------------
| Base SQLite
|--------------------------------------------------------------------------
*/


const dbPath = path.join(
  dataDir,
  "database.sqlite"
);



const db = new Database(
  dbPath
);





// -----------------------------------------------------------------------------
// Optimisations SQLite
// -----------------------------------------------------------------------------


db.pragma(
  "journal_mode = WAL"
);


db.pragma(
  "foreign_keys = ON"
);


db.pragma(
  "synchronous = NORMAL"
);





// -----------------------------------------------------------------------------
// TABLE DES RÉALISATIONS
// -----------------------------------------------------------------------------


db.prepare(`
CREATE TABLE IF NOT EXISTS realisations (

    id INTEGER PRIMARY KEY AUTOINCREMENT,

    title TEXT NOT NULL,

    description TEXT,

    avant TEXT NOT NULL,

    apres TEXT NOT NULL,

    created_at DATETIME DEFAULT CURRENT_TIMESTAMP

)
`).run();





// -----------------------------------------------------------------------------
// TABLE ADMINISTRATEUR
// Un seul administrateur est nécessaire.
// -----------------------------------------------------------------------------


db.prepare(`
CREATE TABLE IF NOT EXISTS admins (

    id INTEGER PRIMARY KEY AUTOINCREMENT,

    password_hash TEXT NOT NULL,

    created_at DATETIME DEFAULT CURRENT_TIMESTAMP

)
`).run();





// -----------------------------------------------------------------------------
// TABLE DES SESSIONS
// Une ligne = une connexion active.
// -----------------------------------------------------------------------------


db.prepare(`
CREATE TABLE IF NOT EXISTS sessions (

    id INTEGER PRIMARY KEY AUTOINCREMENT,

    token TEXT NOT NULL UNIQUE,

    expires_at DATETIME NOT NULL,

    created_at DATETIME DEFAULT CURRENT_TIMESTAMP

)
`).run();





// -----------------------------------------------------------------------------
// INDEX
// -----------------------------------------------------------------------------


db.prepare(`
CREATE INDEX IF NOT EXISTS idx_sessions_token
ON sessions(token)
`).run();



db.prepare(`
CREATE INDEX IF NOT EXISTS idx_sessions_expiration
ON sessions(expires_at)
`).run();





export default db;