import { useEffect, useState } from "react";

import Container from "../layout/Container";

import BeforeAfterSlider from "../ui/BeforeAfterSlider";

import {
  getRealisations,
  type Realisation,
} from "../../services/api";





export default function Realisations() {



  const [
    realisations,
    setRealisations
  ] = useState<Realisation[]>([]);



  const [
    loading,
    setLoading
  ] = useState(true);



  const [
    error,
    setError
  ] = useState(false);








  useEffect(() => {


    let mounted = true;



    async function load(){


      try{


        const data =
          await getRealisations();



        if(mounted){

          setRealisations(data);

        }


      }


      catch(error){


        console.error(
          "Erreur chargement réalisations :",
          error
        );



        if(mounted){

          setError(true);

        }


      }


      finally{


        if(mounted){

          setLoading(false);

        }


      }


    }



    load();




    return ()=>{

      mounted=false;

    };



  }, []);









  if(loading){


    return (

      <section
        className="
          py-20
          md:py-32
        "
      >

        <Container>

          <p className="text-content">

            Chargement des réalisations...

          </p>

        </Container>


      </section>

    );


  }









  if(error){


    return (

      <section
        className="
          py-20
          md:py-32
        "
      >

        <Container>


          <p className="text-content">

            Impossible de charger les réalisations.

          </p>


        </Container>


      </section>


    );


  }









  return (

    <section

      id="realisations"

      className="
        py-20
        md:py-32
      "

    >



      <Container>





        <div

          className="
            mb-12
            max-w-3xl
          "

        >




          <p

            className="
              mb-4
              uppercase
              tracking-[0.3em]
              text-sm
              text-nature
            "

          >

            Réalisations

          </p>







          <h2

            className="
              title-section
            "

          >

            Des meubles anciens
            <br />
            qui retrouvent leur histoire


          </h2>







          <p

            className="
              mt-6
              text-content
            "

          >

            Chaque rénovation est réalisée avec soin afin
            de préserver l'âme et le caractère du mobilier.

          </p>





        </div>









        <div

          className="
            grid
            gap-8
            sm:grid-cols-2
            lg:grid-cols-3
          "

        >




          {
            realisations.map((item)=>(


              <article

                key={item.id}

                className="
                  overflow-hidden
                  rounded-soft
                  bg-white
                  shadow-antique
                "

              >





                <BeforeAfterSlider


                  avant={item.avant}


                  apres={item.apres}


                  title={item.title}


                />








                <div

                  className="
                    p-5
                  "

                >




                  <h3

                    className="
                      font-display
                      text-xl
                      text-antique-800
                    "

                  >

                    {item.title}


                  </h3>







                  <p

                    className="
                      mt-3
                      text-sm
                      text-content
                    "

                  >

                    {item.description}


                  </p>






                </div>





              </article>


            ))

          }





        </div>






      </Container>



    </section>


  );

}