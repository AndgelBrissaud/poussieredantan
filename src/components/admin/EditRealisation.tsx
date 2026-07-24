import {
  useEffect,
  useState
} from "react";


import {
  API_BASE_URL,
  type Realisation
} from "../../services/api";


import Toast from "../ui/Toast";





export default function EditRealisation({

  realisation,

  onClose,

  onUpdated

}:{

  realisation:Realisation;

  onClose:()=>void;

  onUpdated:()=>void;

}) {





  const [title,setTitle] =
    useState(realisation.title);


  const [description,setDescription] =
    useState(realisation.description);


  const [avant,setAvant] =
    useState<File|null>(null);


  const [apres,setApres] =
    useState<File|null>(null);



  const [avantPreview,setAvantPreview] =
    useState<string>(
      `${API_BASE_URL}${realisation.avant}`
    );


  const [apresPreview,setApresPreview] =
    useState<string>(
      `${API_BASE_URL}${realisation.apres}`
    );



  const [loading,setLoading] =
    useState(false);



  const [toast,setToast] =
    useState<string|null>(null);








  useEffect(()=>{


    document.body.style.overflow="hidden";


    function escape(e:KeyboardEvent){

      if(e.key==="Escape"){

        onClose();

      }

    }


    window.addEventListener(
      "keydown",
      escape
    );



    return ()=>{

      document.body.style.overflow="";

      window.removeEventListener(
        "keydown",
        escape
      );

    };


  },[]);









  function selectFile(

    file:File,

    type:"avant"|"apres"

  ){


    const preview =
      URL.createObjectURL(file);



    if(type==="avant"){

      setAvant(file);

      setAvantPreview(preview);

    }


    else{

      setApres(file);

      setApresPreview(preview);

    }


  }









  async function submit(
    e:React.FormEvent
  ){

    e.preventDefault();



    const data =
      new FormData();



    data.append(
      "title",
      title
    );


    data.append(
      "description",
      description
    );



    if(avant){

      data.append(
        "avant",
        avant
      );

    }



    if(apres){

      data.append(
        "apres",
        apres
      );

    }






    try{


      setLoading(true);



      const response =
        await fetch(
            `${API_BASE_URL}/api/admin/realisations/${realisation.id}`,
            {
                method:"PUT",

                credentials:"include",

                body:data
            }
        );





      if(!response.ok){

        throw new Error();

      }





      setToast(
        "Réalisation modifiée avec succès"
      );



      setTimeout(()=>{

        onUpdated();

      },900);



    }


    catch(error){


      console.error(error);


      setToast(
        "Erreur lors de la modification"
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

        <Toast

          message={toast}

          onClose={()=>
            setToast(null)
          }

        />

      }






      <div

        onMouseDown={(e)=>{

          if(e.currentTarget===e.target){

            onClose();

          }

        }}

        className="
          fixed
          inset-0
          z-50
          flex
          items-center
          justify-center
          bg-black/50
          p-4
          backdrop-blur-sm
          animate-fade
        "

      >








        <form

          onSubmit={submit}

          className="
            flex
            max-h-[90vh]
            w-full
            max-w-3xl
            flex-col
            overflow-hidden
            rounded-soft
            bg-white
            shadow-antique
          "

        >









          {/* HEADER */}

          <div

            className="
              flex
              items-center
              justify-between
              border-b
              border-antique-100
              p-8
            "

          >

            <div>


              <p

                className="
                  text-xs
                  uppercase
                  tracking-[0.3em]
                  text-nature
                "

              >

                Administration


              </p>


              <h2

                className="
                  mt-2
                  font-display
                  text-3xl
                  text-antique-800
                "

              >

                Modifier la réalisation

              </h2>


            </div>





            <button

              type="button"

              onClick={onClose}

              className="
                cursor-pointer
                text-2xl
                text-antique-600
                transition
                hover:text-antique-900
              "

            >

              ×

            </button>


          </div>









          {/* CONTENU SCROLL */}

          <div

            className="
              flex-1
              space-y-8
              overflow-y-auto
              p-8
            "

          >







            <input

              value={title}

              onChange={(e)=>
                setTitle(e.target.value)
              }

              className="
                w-full
                rounded
                border
                border-antique-300
                bg-antique-50
                p-4
                outline-none
              "

            />






            <textarea

              value={description}

              onChange={(e)=>
                setDescription(e.target.value)
              }

              className="
                h-32
                w-full
                rounded
                border
                border-antique-300
                bg-antique-50
                p-4
                outline-none
              "

            />









            <div

              className="
                grid
                gap-6
                md:grid-cols-2
              "

            >



              <ImageBox

                title="Avant"

                image={avantPreview}

                onChange={(file)=>
                  selectFile(file,"avant")
                }

              />



              <ImageBox

                title="Après"

                image={apresPreview}

                onChange={(file)=>
                  selectFile(file,"apres")
                }

              />



            </div>






          </div>










          {/* FOOTER */}

          <div

            className="
              flex
              gap-4
              border-t
              border-antique-100
              p-8
            "

          >


            <button

              type="button"

              onClick={onClose}

              className="
                flex-1
                cursor-pointer
                rounded
                border
                border-antique-300
                py-4
                transition
                hover:bg-antique-50
                active:scale-95
              "

            >

              Annuler

            </button>





            <button

              disabled={loading}

              className="
                flex-1
                cursor-pointer
                rounded
                bg-antique-800
                py-4
                text-white
                transition
                hover:bg-antique-700
                active:scale-95
              "

            >

              {
                loading
                ?
                "Enregistrement..."
                :
                "Sauvegarder"
              }


            </button>



          </div>







        </form>



      </div>


    </>

  );

}









function ImageBox({

  title,

  image,

  onChange

}:{

  title:string;

  image:string;

  onChange:(file:File)=>void;

}) {


  return (

    <label

      className="
        group
        cursor-pointer
        overflow-hidden
        rounded-soft
        border
        border-antique-300
      "

    >


      <img

        src={image}

        className="
          aspect-[4/3]
          w-full
          object-cover
        "

      />



      <div

        className="
          p-4
          text-center
          text-sm
          uppercase
          tracking-widest
          text-antique-800
          transition
          group-hover:bg-antique-50
        "

      >

        Remplacer {title}


      </div>



      <input

        type="file"

        accept="image/*"

        className="hidden"

        onChange={(e)=>{

          const file =
            e.target.files?.[0];


          if(file){

            onChange(file);

          }


        }}

      />



    </label>


  );

}