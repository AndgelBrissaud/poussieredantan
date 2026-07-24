import { useState } from "react";
import { API_BASE_URL } from "../../services/api";
import Toast from "../ui/Toast";


export default function RealisationForm() {


  const [title, setTitle] =
    useState("");

  const [description, setDescription] =
    useState("");


  const [avant, setAvant] =
    useState<File | null>(null);

  const [apres, setApres] =
    useState<File | null>(null);



  const [avantPreview, setAvantPreview] =
    useState<string | null>(null);

  const [apresPreview, setApresPreview] =
    useState<string | null>(null);



  const [loading, setLoading] =
    useState(false);



  const [toast, setToast] =
    useState<string | null>(null);





  function selectImage(
    file: File,
    type: "avant" | "apres"
  ) {


    const allowed = [
      "image/jpeg",
      "image/png",
      "image/webp"
    ];



    if(!allowed.includes(file.type)) {

      setToast(
        "Format accepté : JPG, PNG ou WEBP"
      );

      return;

    }



    if(file.size > 5 * 1024 * 1024) {

      setToast(
        "L'image ne doit pas dépasser 5 Mo"
      );

      return;

    }



    const preview =
      URL.createObjectURL(file);



    if(type === "avant") {


      if(avantPreview) {

        URL.revokeObjectURL(
          avantPreview
        );

      }


      setAvant(file);
      setAvantPreview(preview);


    } else {



      if(apresPreview) {

        URL.revokeObjectURL(
          apresPreview
        );

      }


      setApres(file);
      setApresPreview(preview);


    }


  }







  async function submit(
    e: React.FormEvent
  ) {


    e.preventDefault();



    if(!title.trim()) {


      setToast(
        "Veuillez renseigner le nom du meuble"
      );


      return;

    }





    if(!avant || !apres) {


      setToast(
        "Veuillez sélectionner les deux photographies"
      );


      return;

    }







    const formData =
      new FormData();



    formData.append(
      "title",
      title
    );



    formData.append(
      "description",
      description
    );



    formData.append(
      "avant",
      avant
    );



    formData.append(
      "apres",
      apres
    );







    try {


      setLoading(true);




      const response =
        await fetch(
            `${API_BASE_URL}/api/admin/realisations`,
            {
            method:"POST",

            credentials:"include",

            body:formData
            }
        );




      if(!response.ok) {

        throw new Error();

      }





      setTitle("");

      setDescription("");

      setAvant(null);

      setApres(null);



      if(avantPreview) {

        URL.revokeObjectURL(
          avantPreview
        );

      }


      if(apresPreview) {

        URL.revokeObjectURL(
          apresPreview
        );

      }



      setAvantPreview(null);

      setApresPreview(null);





      setToast(
        "Réalisation enregistrée avec succès"
      );



    }

    catch(error) {


      console.error(error);



      setToast(
        "Une erreur est survenue lors de l'enregistrement"
      );


    }

    finally {


      setLoading(false);


    }


  }









  return (

    <>

      {
        toast && (

          <Toast

            message={toast}

            onClose={() =>
              setToast(null)
            }

          />

        )
      }






      <form

        onSubmit={submit}

        className="
          mx-auto
          mt-10
          max-w-5xl
          rounded-soft
          bg-white
          p-8
          shadow-antique
          md:p-12
        "

      >




        <div className="mb-10">


          <h2

            className="
              font-display
              text-3xl
              text-antique-800
            "

          >

            Nouvelle réalisation

          </h2>



          <p

            className="
              mt-3
              text-content
            "

          >

            Ajoutez un meuble restauré avec ses photographies avant et après.

          </p>



        </div>







        <div className="space-y-6">



          <input

            value={title}

            onChange={(e)=>
              setTitle(e.target.value)
            }

            placeholder="Nom du meuble"

            className="
              w-full
              rounded
              border
              border-antique-300
              bg-antique-50
              p-4
              outline-none
              transition
              focus:border-antique-700
            "

          />





          <textarea

            value={description}

            onChange={(e)=>
              setDescription(e.target.value)
            }

            placeholder="Description du travail réalisé"

            className="
              h-32
              w-full
              rounded
              border
              border-antique-300
              bg-antique-50
              p-4
              outline-none
              transition
              focus:border-antique-700
            "

          />







          <div

            className="
              grid
              gap-8
              md:grid-cols-2
            "

          >


            <UploadBox

              title="Avant restauration"

              preview={avantPreview}

              onSelect={(file)=>
                selectImage(
                  file,
                  "avant"
                )
              }

            />



            <UploadBox

              title="Après restauration"

              preview={apresPreview}

              onSelect={(file)=>
                selectImage(
                  file,
                  "apres"
                )
              }

            />


          </div>








          <button

            type="submit"

            disabled={loading}

            className="
              mt-6
              w-full
              cursor-pointer
              rounded
              bg-antique-800
              py-4
              text-white
              transition
              duration-300
              hover:bg-antique-700
              active:scale-[0.98]
              disabled:cursor-not-allowed
              disabled:opacity-60
            "

          >

            {
              loading
              ?
              "Enregistrement..."
              :
              "Enregistrer la réalisation"
            }


          </button>



        </div>


      </form>


    </>

  );

}

function UploadBox({

  title,

  preview,

  onSelect

}: {

  title: string;

  preview: string | null;

  onSelect: (file: File) => void;

}) {



  return (

    <label

      className="
        group
        relative
        flex
        aspect-[4/3]
        cursor-pointer
        items-center
        justify-center
        overflow-hidden
        rounded-soft
        border
        border-antique-300
        bg-antique-50
        transition
        duration-300
        hover:border-antique-700
        hover:shadow-antique
      "

    >



      {
        preview

        ?


        (

          <>

            <img

              src={preview}

              alt={title}

              className="
                absolute
                inset-0
                h-full
                w-full
                object-cover
                transition
                duration-500
                group-hover:scale-105
              "

            />


            <div

              className="
                absolute
                inset-x-0
                bottom-0
                bg-black/40
                p-3
                text-center
                text-sm
                uppercase
                tracking-[0.2em]
                text-white
              "

            >

              {title}

            </div>


          </>


        )


        :


        (

          <div

            className="
              text-center
              px-6
            "

          >


            <p

              className="
                font-display
                text-xl
                text-antique-800
              "

            >

              {title}

            </p>



            <p

              className="
                mt-3
                text-sm
                text-content
              "

            >

              Cliquer pour choisir une photographie

            </p>


            <p

              className="
                mt-2
                text-xs
                uppercase
                tracking-widest
                text-nature
              "

            >

              JPG · PNG · WEBP

            </p>


          </div>


        )

      }






      <input

        type="file"

        accept="image/jpeg,image/png,image/webp"

        className="hidden"

        onChange={(e)=>{


          const file =
            e.target.files?.[0];



          if(file) {

            onSelect(file);

          }



          e.target.value = "";

        }}

      />


    </label>

  );

}