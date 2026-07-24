import { useEffect, useState } from "react";

import {
  API_BASE_URL,
  type Realisation
} from "../../services/api";

import Toast from "../ui/Toast";

import BeforeAfterSlider from "../ui/BeforeAfterSlider";

import EditRealisation from "./EditRealisation";





export default function RealisationsList() {



  const [
    realisations,
    setRealisations
  ] = useState<Realisation[]>([]);



  const [
    loading,
    setLoading
  ] = useState(true);



  const [
    toast,
    setToast
  ] = useState<string | null>(null);



  const [
    editing,
    setEditing
  ] = useState<Realisation | null>(null);








  async function loadRealisations(){


    try{


      const response =

        await fetch(

          `${API_BASE_URL}/api/admin/realisations`,

          {
            credentials:"include"
          }

        );




      if(!response.ok){

        throw new Error(
          "Erreur chargement réalisations"
        );

      }





      const data =

        await response.json();




      console.log(
        "REALISATIONS ADMIN :",
        data
      );




      setRealisations(data);



    }


    catch(error){


      console.error(
        "Erreur chargement réalisations :",
        error
      );



      setToast(
        "Impossible de charger les réalisations"
      );


    }


  }









  useEffect(()=>{


    async function init(){


      await loadRealisations();


      setLoading(false);


    }



    init();


  },[]);









  async function deleteRealisation(
    id:number
  ){



    try{


      const response =

        await fetch(

          `${API_BASE_URL}/api/admin/realisations/${id}`,

          {

            method:"DELETE",

            credentials:"include"

          }

        );





      if(!response.ok){

        throw new Error(
          "Erreur suppression"
        );

      }






      setToast(
        "Réalisation supprimée"
      );




      await loadRealisations();



    }


    catch(error){


      console.error(
        "Erreur suppression :",
        error
      );



      setToast(
        "Erreur lors de la suppression"
      );


    }


  }









  if(loading){


    return (

      <div

        className="
          mt-16
          rounded-soft
          bg-white
          p-10
          text-center
          shadow-antique
        "

      >

        <p className="text-content">

          Chargement des réalisations...

        </p>


      </div>

    );


  }









  return (

    <section

      className="
        mt-20
      "

    >






      {
        editing &&

        (

          <EditRealisation

            realisation={editing}


            onClose={()=>{

              setEditing(null);

            }}



            onUpdated={()=>{


              setEditing(null);


              loadRealisations();


            }}

          />

        )

      }








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









      <div

        className="
          mb-10
        "

      >


        <p

          className="
            mb-3
            text-sm
            uppercase
            tracking-[0.3em]
            text-nature
          "

        >

          Collection

        </p>






        <h2

          className="
            font-display
            text-3xl
            text-antique-800
          "

        >

          Réalisations enregistrées

        </h2>






        <p

          className="
            mt-4
            max-w-2xl
            text-content
          "

        >

          Retrouvez ici les meubles restaurés
          présents sur votre galerie publique.

        </p>



      </div>









      {
        realisations.length === 0

        ?

        (

          <div

            className="
              rounded-soft
              bg-white
              p-12
              text-center
              shadow-antique
            "

          >

            <p

              className="
                font-display
                text-xl
                text-antique-800
              "

            >

              Aucun meuble enregistré

            </p>




            <p

              className="
                mt-3
                text-content
              "

            >

              Ajoutez votre première restauration
              pour commencer votre galerie.

            </p>


          </div>

        )


        :


        (

          <div

            className="
              grid
              gap-10
              md:grid-cols-2
              xl:grid-cols-3
            "

          >



            {
              realisations.map(

                (item)=>(


                  <article

                    key={item.id}

                    className="
                      overflow-hidden
                      rounded-soft
                      bg-white
                      shadow-antique
                      transition
                      duration-300
                      hover:-translate-y-1
                    "

                  >






                    <BeforeAfterSlider

                      avant={item.avant}

                      apres={item.apres}

                      title={item.title}

                    />








                    <div

                      className="
                        p-7
                      "

                    >






                      <h3

                        className="
                          font-display
                          text-2xl
                          text-antique-800
                        "

                      >

                        {item.title}

                      </h3>








                      <p

                        className="
                          mt-4
                          text-sm
                          leading-relaxed
                          text-content
                        "

                      >

                        {item.description}

                      </p>








                      <div

                        className="
                          mt-8
                          flex
                          gap-3
                        "

                      >






                        <button

                          onClick={()=>{

                            setEditing(item);

                          }}

                          className="
                            flex-1
                            cursor-pointer
                            rounded
                            border
                            border-antique-300
                            py-3
                            text-sm
                            uppercase
                            tracking-wider
                            text-antique-800
                            transition
                            duration-300
                            hover:bg-antique-50
                            active:scale-95
                          "

                        >

                          Modifier


                        </button>









                        <button

                          onClick={()=>{

                            deleteRealisation(
                              item.id
                            );

                          }}

                          className="
                            flex-1
                            cursor-pointer
                            rounded
                            border
                            border-red-200
                            py-3
                            text-sm
                            uppercase
                            tracking-wider
                            text-red-700
                            transition
                            duration-300
                            hover:bg-red-50
                            active:scale-95
                          "

                        >

                          Supprimer


                        </button>





                      </div>






                    </div>





                  </article>


                )

              )

            }



          </div>

        )


      }





    </section>

  );

}