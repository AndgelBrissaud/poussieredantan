import { useEffect, useState } from "react";

import {
  checkAuth,
  logoutAdmin
} from "../services/api";

import Login from "../components/admin/Login";

import RealisationForm from "../components/admin/RealisationForm";

import RealisationsList from "../components/admin/RealisationsList";





export default function Admin(){



  const [
    authenticated,
    setAuthenticated
  ] = useState<boolean | null>(null);








useEffect(()=>{


  let mounted = true;



  async function init(){


    try{


      const result =
        await checkAuth();



      if(mounted){


        setAuthenticated(
          result.authenticated
        );


      }


    }


    catch(error){


      console.error(
        "Erreur vérification authentification",
        error
      );



      if(mounted){


        setAuthenticated(false);


      }


    }


  }



  init();




  return ()=>{


    mounted = false;


  };



},[]);









  async function logout(){


    await logoutAdmin();



    setAuthenticated(false);


  }







  if(authenticated === null){


    return (

      <div
        className="
          min-h-screen
          flex
          items-center
          justify-center
        "
      >

        Chargement...


      </div>

    );


  }








  if(!authenticated){


    return (

      <Login

        onLogin={()=>{

          setAuthenticated(true);

        }}

      />

    );


  }









  return (

    <main

      className="
        min-h-screen
        bg-antique-50
        py-16
        px-6
      "

    >




      <div

        className="
          mx-auto
          max-w-6xl
        "

      >





        <header

          className="
            mb-16
            flex
            items-center
            justify-between
          "

        >



          <div>


            <p

              className="
                text-sm
                uppercase
                tracking-[0.3em]
                text-nature
              "

            >

              Administration

            </p>




            <h1

              className="
                mt-3
                font-display
                text-4xl
                text-antique-800
              "

            >

              Gestion des réalisations

            </h1>



          </div>






          <button

            onClick={logout}

            className="
              cursor-pointer
              rounded
              border
              border-antique-300
              px-5
              py-3
              text-sm
              uppercase
              tracking-wider
              text-antique-800
              transition
              hover:bg-white
              active:scale-95
            "

          >

            Déconnexion


          </button>




        </header>









        <section

          className="
            space-y-20
          "

        >


          <RealisationForm />



          <RealisationsList />



        </section>





      </div>





    </main>

  );

}