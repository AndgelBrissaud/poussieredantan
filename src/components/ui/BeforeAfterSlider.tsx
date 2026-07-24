import { useState } from "react";

import { API_BASE_URL } from "../../services/api";



export default function BeforeAfterSlider({

  avant,

  apres,

  title,

}: {

  avant:string;

  apres:string;

  title:string;

}) {


  const [position,setPosition] =
    useState(50);



  const transition =
    "0.08s ease-out";





  return (

    <div

      className="
        relative
        aspect-[4/3]
        overflow-hidden
      "

    >





      {/* IMAGE APRÈS */}

      <img

        src={`${API_BASE_URL}${apres}`}

        alt={`${title} après`}

        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
        "

      />







      {/* LABEL APRÈS */}

      <span

        className="
          absolute
          right-3
          top-3
          z-10
          bg-black/40
          px-2
          py-1
          text-xs
          uppercase
          tracking-widest
          text-white
        "

      >

        Après

      </span>








      {/* AVANT + LABEL */}

      <div

        className="
          absolute
          inset-0
          z-10
        "

        style={{

          clipPath:
          `inset(0 ${100-position}% 0 0)`,

          transition:
          `clip-path ${transition}`

        }}

      >



        <img

          src={`${API_BASE_URL}${avant}`}

          alt={`${title} avant`}

          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
          "

        />





        <span

          className="
            absolute
            left-3
            top-3
            bg-black/40
            px-2
            py-1
            text-xs
            uppercase
            tracking-widest
            text-white
          "

        >

          Avant

        </span>



      </div>








      {/* SEPARATEUR */}

      <div

        className="
          absolute
          top-0
          bottom-0
          z-20
          w-px
          bg-white/80
          shadow
        "

        style={{

          left:`${position}%`,

          transition:
          `left ${transition}`

        }}

      />









      {/* POIGNEE */}

      <div

        className="
          absolute
          z-30
          flex
          h-12
          w-12
          -translate-x-1/2
          -translate-y-1/2
          items-center
          justify-center
          rounded-full
          border
          border-antique-300
          bg-white/95
          shadow-xl
          backdrop-blur-sm
          pointer-events-none
        "

        style={{

          left:`${position}%`,

          top:"50%",

          transition:
          `left ${transition}`

        }}

      >



        <svg

          width="26"

          height="26"

          viewBox="0 0 26 26"

          fill="none"

          xmlns="http://www.w3.org/2000/svg"

        >

          <path

            d="M10 8L5 13L10 18"

            stroke="#8B7355"

            strokeWidth="1.4"

            strokeLinecap="round"

            strokeLinejoin="round"

          />



          <path

            d="M16 8L21 13L16 18"

            stroke="#8B7355"

            strokeWidth="1.4"

            strokeLinecap="round"

            strokeLinejoin="round"

          />


        </svg>


      </div>








      {/* INPUT */}

      <input

        type="range"

        min="0"

        max="100"

        value={position}

        onChange={(e)=>

          setPosition(
            Number(e.target.value)
          )

        }

        className="
          absolute
          inset-0
          z-40
          h-full
          w-full
          cursor-ew-resize
          opacity-0
        "

      />



    </div>

  );

}