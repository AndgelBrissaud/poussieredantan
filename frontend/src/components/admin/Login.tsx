import { useState } from "react";

import {
  loginAdmin
} from "../../services/api";

import Toast from "../ui/Toast";





export default function Login({

  onLogin

}:{

  onLogin:()=>void;

}) {



  const [
    password,
    setPassword
  ] = useState("");



  const [
    loading,
    setLoading
  ] = useState(false);



  const [
    toast,
    setToast
  ] = useState<string | null>(null);









  async function submit(
    e:React.FormEvent
  ){


    e.preventDefault();



    if(!password.trim()){


      setToast(
        "Veuillez saisir votre mot de passe"
      );


      return;


    }






    try{


      setLoading(true);




      await loginAdmin(
        password
      );






      setToast(
        "Connexion réussie"
      );






      setTimeout(()=>{


        onLogin();


      },700);




    }



    catch(error){



      console.error(
        error
      );



      setToast(

        error instanceof Error

        ? error.message

        : "Erreur de connexion"

      );


    }



    finally{


      setLoading(false);


    }


  }








  return (

    <>


      {
        toast &&

        (

          <Toast

            message={toast}

            onClose={()=>{

              setToast(null);

            }}

          />

        )

      }








      <section

        className="
          flex
          min-h-screen
          items-center
          justify-center
          bg-antique-50
          px-6
        "

      >




        <form

          onSubmit={submit}

          className="
            w-full
            max-w-md
            rounded-soft
            bg-white
            p-10
            shadow-antique
            animate-fade-in
          "

        >






          <div

            className="
              mb-10
              text-center
            "

          >


            <p

              className="
                mb-3
                text-sm
                uppercase
                tracking-[0.35em]
                text-nature
              "

            >

              Administration

            </p>





            <h1

              className="
                font-display
                text-4xl
                text-antique-800
              "

            >

              Poussière d'Antan

            </h1>





            <p

              className="
                mt-4
                text-content
              "

            >

              Accès à votre espace de gestion

            </p>



          </div>









          <div

            className="
              space-y-5
            "

          >





            <div>


              <label

                className="
                  mb-2
                  block
                  text-sm
                  text-antique-800
                "

              >

                Mot de passe

              </label>





              <input

                type="password"

                value={password}

                onChange={(e)=>{

                  setPassword(
                    e.target.value
                  );

                }}


                className="
                  w-full
                  rounded
                  border
                  border-antique-300
                  bg-antique-50
                  p-4
                  text-antique-800
                  outline-none
                  transition
                  focus:border-antique-700
                "


                placeholder="Votre mot de passe"

              />



            </div>









            <button

              type="submit"

              disabled={loading}


              className="
                w-full
                cursor-pointer
                rounded
                bg-antique-800
                py-4
                text-sm
                uppercase
                tracking-[0.2em]
                text-white
                transition
                duration-300
                hover:bg-antique-700
                active:scale-95
                disabled:cursor-not-allowed
                disabled:opacity-60
              "

            >


              {

                loading

                ?

                "Connexion..."

                :

                "Se connecter"

              }



            </button>





          </div>





        </form>





      </section>



    </>


  );


}