import { Router } from "express";

import { upload } from "../uploads.js";

import db from "../database/database.js";

import authMiddleware from "../auth/middleware.js";

import fs from "fs";
import path from "path";

import { fileURLToPath } from "url";





const router =
  Router();





/*
|--------------------------------------------------------------------------
| Protection administration
|--------------------------------------------------------------------------
*/


router.use(
  authMiddleware
);








const __filename =
  fileURLToPath(import.meta.url);


const __dirname =
  path.dirname(__filename);



const uploadsPath =
  path.join(
    __dirname,
    "../../../data/uploads"
  );









function deleteImage(image){


  if(!image){

    return;

  }



  const filePath =

    path.join(

      uploadsPath,

      image.replace(
        "/uploads/",
        ""
      )

    );



  if(
    fs.existsSync(filePath)
  ){

    fs.unlinkSync(
      filePath
    );

  }


}









/*
|--------------------------------------------------------------------------
| Liste des réalisations
|--------------------------------------------------------------------------
*/


router.get(

  "/realisations",

  (req,res)=>{


    try{


      const realisations =

        db

        .prepare(`

          SELECT *

          FROM realisations

          ORDER BY created_at DESC

        `)

        .all();



      res.json(
        realisations
      );


    }


    catch{


      res.status(500).json({

        error:
        "Erreur chargement réalisations"

      });


    }


  }

);









/*
|--------------------------------------------------------------------------
| Ajouter une réalisation
|--------------------------------------------------------------------------
*/


router.post(

  "/realisations",


  upload.fields([

    {
      name:"avant",
      maxCount:1
    },

    {
      name:"apres",
      maxCount:1
    }

  ]),


  (req,res)=>{


    try{


      const {
        title,
        description
      } = req.body;





      if(

        !title ||

        !req.files?.avant ||

        !req.files?.apres

      ){


        return res.status(400).json({

          error:
          "Titre et images obligatoires"

        });


      }







      const avant =

        `/uploads/avant/${req.files.avant[0].filename}`;





      const apres =

        `/uploads/apres/${req.files.apres[0].filename}`;







      const result =

        db

        .prepare(`

          INSERT INTO realisations

          (

            title,

            description,

            avant,

            apres

          )

          VALUES

          (?,?,?,?)

        `)

        .run(

          title,

          description || "",

          avant,

          apres

        );







      res.json({

        success:true,

        id:
        result.lastInsertRowid


      });



    }


    catch(error){


      console.error(error);



      res.status(500).json({

        error:
        "Erreur ajout réalisation"

      });


    }


  }

);









/*
|--------------------------------------------------------------------------
| Modifier une réalisation
|--------------------------------------------------------------------------
*/


router.put(

  "/realisations/:id",


  upload.fields([

    {
      name:"avant",
      maxCount:1
    },

    {
      name:"apres",
      maxCount:1
    }

  ]),



  (req,res)=>{


    try{


      const id =
        Number(req.params.id);





      const existing =

        db

        .prepare(`

          SELECT *

          FROM realisations

          WHERE id = ?

        `)

        .get(id);







      if(!existing){


        return res.status(404).json({

          error:
          "Réalisation introuvable"

        });


      }







      let avant =
        existing.avant;



      let apres =
        existing.apres;








      if(req.files?.avant){


        deleteImage(
          existing.avant
        );


        avant =
        `/uploads/avant/${req.files.avant[0].filename}`;


      }








      if(req.files?.apres){


        deleteImage(
          existing.apres
        );


        apres =
        `/uploads/apres/${req.files.apres[0].filename}`;


      }








      db

      .prepare(`

        UPDATE realisations

        SET

          title = ?,

          description = ?,

          avant = ?,

          apres = ?

        WHERE id = ?

      `)

      .run(

        req.body.title,

        req.body.description || "",

        avant,

        apres,

        id

      );







      res.json({

        success:true

      });



    }


    catch(error){


      console.error(error);



      res.status(500).json({

        error:
        "Erreur modification"

      });


    }



  }

);









/*
|--------------------------------------------------------------------------
| Supprimer une réalisation
|--------------------------------------------------------------------------
*/


router.delete(

  "/realisations/:id",


  (req,res)=>{


    try{


      const id =
        Number(req.params.id);





      const realisation =

        db

        .prepare(`

          SELECT *

          FROM realisations

          WHERE id = ?

        `)

        .get(id);








      if(!realisation){


        return res.status(404).json({

          error:
          "Réalisation introuvable"

        });


      }








      deleteImage(
        realisation.avant
      );


      deleteImage(
        realisation.apres
      );








      db

      .prepare(`

        DELETE FROM realisations

        WHERE id = ?

      `)

      .run(id);







      res.json({

        success:true,

        message:
        "Réalisation supprimée"

      });





    }


    catch(error){


      console.error(error);



      res.status(500).json({

        error:
        "Erreur suppression"

      });


    }



  }

);








export default router;