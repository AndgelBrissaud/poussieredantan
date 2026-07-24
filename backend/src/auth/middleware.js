import jwt from "jsonwebtoken";


export default function authMiddleware(
  req,
  res,
  next
) {


  try {


    const token =
      req.cookies?.admin_token;



    if(!token){


      return res.status(401).json({

        error:"Non authentifié"

      });


    }





    jwt.verify(

      token,

      process.env.JWT_SECRET

    );





    next();



  }


  catch(error){


    console.error(
      "Erreur authentification :",
      error
    );



    return res.status(401).json({

      error:"Session expirée"

    });


  }


}