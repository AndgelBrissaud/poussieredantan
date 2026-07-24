import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import path from "path";
import { fileURLToPath } from "url";


import authRouter from "./routes/auth.js";
import adminRouter from "./routes/admin.js";
import realisationsRoutes from "./routes/realisations.js";



dotenv.config();



const app = express();





/*
|--------------------------------------------------------------------------
| Middlewares
|--------------------------------------------------------------------------
*/


app.use(

  cors({

    origin: true,

    credentials: true

  })

);



app.use(
  express.json()
);



app.use(
  cookieParser()
);









/*
|--------------------------------------------------------------------------
| Chemins fichiers
|--------------------------------------------------------------------------
*/


const __filename =
  fileURLToPath(import.meta.url);


const __dirname =
  path.dirname(__filename);









/*
|--------------------------------------------------------------------------
| Uploads images
|--------------------------------------------------------------------------
*/


app.use(

  "/uploads",

  express.static(

    path.join(

      __dirname,

      "../../data/uploads"

    )

  )

);









/*
|--------------------------------------------------------------------------
| Routes API
|--------------------------------------------------------------------------
*/


/*
 Authentification
*/

app.use(

  "/api/auth",

  authRouter

);





/*
 Administration protégée
*/

app.use(

  "/api/admin",

  adminRouter

);





/*
 Réalisations publiques
*/

app.use(

  "/api/realisations",

  realisationsRoutes

);









/*
|--------------------------------------------------------------------------
| Test API
|--------------------------------------------------------------------------
*/


app.get(

  "/api",

  (req,res)=>{


    res.json({

      status:"ok",

      message:"API Poussière d'Antan active"

    });


  }

);









/*
|--------------------------------------------------------------------------
| Gestion erreurs
|--------------------------------------------------------------------------
*/


app.use(

  (err,req,res,next)=>{


    console.error(
      "Erreur serveur :",
      err
    );



    res.status(500).json({

      error:
      "Erreur interne serveur"

    });



  }

);









/*
|--------------------------------------------------------------------------
| Serveur
|--------------------------------------------------------------------------
*/


const PORT =
  process.env.PORT || 3000;



app.listen(

  PORT,

  ()=>{


    console.log(

      `Backend lancé sur le port ${PORT}`

    );


  }

);