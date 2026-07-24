import multer from "multer";
import path from "path";
import fs from "fs";
import crypto from "crypto";



/*
|--------------------------------------------------------------------------
| Chemin stockage uploads
|--------------------------------------------------------------------------
|
| Docker :
| /app/data  -> volume hôte
|
| On stocke :
| /app/data/upload/avant
| /app/data/upload/apres
|
*/


const uploadsRoot = path.join(
  process.cwd(),
  "data",
  "upload"
);



const avantFolder = path.join(
  uploadsRoot,
  "avant"
);



const apresFolder = path.join(
  uploadsRoot,
  "apres"
);





/*
|--------------------------------------------------------------------------
| Création automatique des dossiers
|--------------------------------------------------------------------------
*/


[
  uploadsRoot,
  avantFolder,
  apresFolder

].forEach((folder) => {

  if (!fs.existsSync(folder)) {

    fs.mkdirSync(folder, {
      recursive: true
    });

  }

});





/*
|--------------------------------------------------------------------------
| Stockage Multer
|--------------------------------------------------------------------------
*/


const storage = multer.diskStorage({

  destination: (req, file, cb) => {


    if (file.fieldname === "avant") {


      cb(
        null,
        avantFolder
      );


    }

    else if (file.fieldname === "apres") {


      cb(
        null,
        apresFolder
      );


    }

    else {


      cb(
        new Error("Champ image invalide")
      );


    }


  },





  filename: (req, file, cb) => {


    const filename = crypto
      .randomBytes(16)
      .toString("hex");



    const extension = path
      .extname(file.originalname)
      .toLowerCase();



    cb(
      null,
      `${filename}${extension}`
    );


  }


});





/*
|--------------------------------------------------------------------------
| Validation fichiers
|--------------------------------------------------------------------------
*/


function imageFilter(req, file, cb) {


  const allowed = [

    "image/jpeg",
    "image/png",
    "image/webp"

  ];



  if (allowed.includes(file.mimetype)) {


    cb(
      null,
      true
    );


  }

  else {


    cb(
      new Error(
        "Format image non accepté. Utilisez JPG, PNG ou WebP."
      ),
      false
    );


  }


}





/*
|--------------------------------------------------------------------------
| Export Multer
|--------------------------------------------------------------------------
*/


export const upload = multer({

  storage,


  limits: {

    fileSize:
      5 *
      1024 *
      1024

  },


  fileFilter:
    imageFilter

});