export const API_BASE_URL =
  "http://localhost:3000";





export type Realisation = {

  id:number;

  title:string;

  description:string;

  avant:string;

  apres:string;

  created_at?:string;

};

export async function getAdminRealisations(){

  const response =
    await fetch(

      `${API_BASE_URL}/api/admin/realisations`,

      {

        credentials:"include"

      }

    );


  if(!response.ok){

    throw new Error(
      "Non authentifié"
    );

  }


  return response.json();

}






/*
|--------------------------------------------------------------------------
| Réalisations publiques
|--------------------------------------------------------------------------
*/


export async function getRealisations()
:Promise<Realisation[]> {


  const response =
    await fetch(

      `${API_BASE_URL}/api/realisations`

    );



  if(!response.ok){


    throw new Error(
      "Impossible de charger les réalisations"
    );


  }



  return response.json();


}









/*
|--------------------------------------------------------------------------
| Authentification admin
|--------------------------------------------------------------------------
*/


export async function checkAuth(){


  const response =
    await fetch(

      `${API_BASE_URL}/api/auth/me`,

      {

        credentials:"include"

      }

    );



  if(!response.ok){


    return {
      authenticated:false
    };


  }



  return response.json();


}









export async function loginAdmin(
  password:string
){


  const response =
    await fetch(

      `${API_BASE_URL}/api/auth/login`,

      {

        method:"POST",

        headers:{

          "Content-Type":
            "application/json"

        },


        credentials:"include",


        body:JSON.stringify({

          password

        })


      }

    );





  const data =
    await response.json();





  if(!response.ok){


    throw new Error(

      data.error ||
      "Erreur connexion"

    );


  }




  return data;


}









export async function logoutAdmin(){


  const response =
    await fetch(

      `${API_BASE_URL}/api/auth/logout`,

      {

        method:"POST",

        credentials:"include"

      }

    );



  return response.json();


}
