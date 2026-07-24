import { Router } from "express";
import db from "../database/database.js";

const router = Router();

router.get("/", (req, res) => {

  const realisations = db
    .prepare(`
      SELECT *
      FROM realisations
      ORDER BY created_at DESC
    `)
    .all();


  res.json(realisations);

});


export default router;