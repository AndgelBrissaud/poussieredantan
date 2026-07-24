import fs from "fs";
import FormData from "form-data";
import fetch from "node-fetch";


const form = new FormData();


form.append(
  "title",
  "Commode test"
);


form.append(
  "description",
  "Test upload administration"
);


form.append(
  "avant",
  fs.createReadStream("./test-avant.jpg")
);


form.append(
  "apres",
  fs.createReadStream("./test-apres.jpg")
);



const response = await fetch(
  "http://localhost:3000/api/admin/realisations",
  {
    method: "POST",
    body: form
  }
);



console.log(
  await response.json()
);