import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


const router =
  express.Router();





/*
|--------------------------------------------------------------------------
| Connexion administrateur
|--------------------------------------------------------------------------
*/


router.post(
  "/login",
  async(req,res)=>{


    try{


      const {
        password
      } = req.body;



      if(!password){

        return res.status(400).json({

          error:
          "Mot de passe obligatoire"

        });

      }






      const valid =
        await bcrypt.compare(

          password,

          process.env.ADMIN_PASSWORD_HASH

        );





      if(!valid){


        return res.status(401).json({

          error:
          "Mot de passe incorrect"

        });


      }






      const token =
        jwt.sign(

          {
            admin:true

          },

          process.env.JWT_SECRET,

          {

            expiresIn:"8h"

          }

        );








      res.cookie(

        "admin_token",

        token,

        {

          httpOnly:true,

          secure:false,

          sameSite:"lax",

          maxAge:
            8 * 60 * 60 * 1000

        }

      );






      res.json({

        success:true

      });



    }


    catch{


      res.status(500).json({

        error:
        "Erreur connexion"

      });


    }


  }

);









/*
|--------------------------------------------------------------------------
| Vérification session
|--------------------------------------------------------------------------
*/


router.get(
  "/me",
  (req,res)=>{


    const token =
      req.cookies?.admin_token;





    if(!token){


      return res.json({

        authenticated:false

      });


    }







    try{


      jwt.verify(

        token,

        process.env.JWT_SECRET

      );





      res.json({

        authenticated:true

      });



    }


    catch{


      res.json({

        authenticated:false

      });


    }



  }

);









/*
|--------------------------------------------------------------------------
| Déconnexion
|--------------------------------------------------------------------------
*/


router.post(

  "/logout",

  (req,res)=>{


    res.clearCookie(
      "admin_token"
    );



    res.json({

      success:true

    });


  }

);







export default router;