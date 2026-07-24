import sharp from "sharp";
import fs from "fs";



export async function optimizeImage(
  filePath
){

  const tempPath =
    `${filePath}.optimized`;



  await sharp(filePath)

    .resize(
      1600,
      1600,
      {
        fit:"inside",
        withoutEnlargement:true
      }
    )

    .webp({

      quality:85

    })

    .toFile(tempPath);





  fs.unlinkSync(
    filePath
  );



  fs.renameSync(

    tempPath,

    filePath.replace(
      /\.[^/.]+$/,
      ".webp"
    )

  );

}