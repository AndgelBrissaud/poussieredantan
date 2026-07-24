import db from "./database.js";


const exists = db
  .prepare("SELECT COUNT(*) as count FROM realisations")
  .get();


if (exists.count === 0) {

  db.prepare(`
    INSERT INTO realisations
    (
      title,
      description,
      avant,
      apres
    )
    VALUES (?, ?, ?, ?)
  `).run(
    "Commode ancienne",
    "Rénovation d'un meuble ancien par aérogommage.",
    "/uploads/avant/commode.jpg",
    "/uploads/apres/commode-renove.jpg"
  );

  console.log("Données initiales ajoutées");

} else {

  console.log("Base déjà initialisée");

}