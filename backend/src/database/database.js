import Database from "better-sqlite3";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dbPath = path.join(
  __dirname,
  "../../../data/database.sqlite"
);

const db = new Database(dbPath);



// -----------------------------------------------------------------------------
// Optimisations SQLite
// -----------------------------------------------------------------------------

db.pragma("journal_mode = WAL");
db.pragma("foreign_keys = ON");
db.pragma("synchronous = NORMAL");



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