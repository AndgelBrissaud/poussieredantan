import { useEffect, useState } from "react";


type ToastProps = {
  message: string;
  type?: "success" | "error";
  onClose: () => void;
};



export default function Toast({
  message,
  type = "success",
  onClose,
}: ToastProps) {


  const [visible, setVisible] =
    useState(false);



  useEffect(() => {

    const show =
      requestAnimationFrame(() => {
        setVisible(true);
      });


    const timer =
      setTimeout(() => {

        setVisible(false);


        setTimeout(() => {

          onClose();

        }, 350);


      }, 3200);



    return () => {

      cancelAnimationFrame(show);

      clearTimeout(timer);

    };


  }, [onClose]);







  return (

    <div

      className={`
        fixed
        right-6
        top-6
        z-50

        transition-all
        duration-350
        ease-out

        ${
          visible
          ?
          "translate-x-0 opacity-100"
          :
          "translate-x-8 opacity-0"
        }

      `}

    >


      <div

        className={`
          flex
          items-center
          gap-4

          rounded-soft

          border

          bg-white

          px-6
          py-4

          shadow-antique

          backdrop-blur-sm

          ${
            type === "success"
            ?
            "border-nature"
            :
            "border-red-300"
          }

        `}

      >



        <span

          className="
            flex
            h-7
            w-7
            items-center
            justify-center
            rounded-full
            bg-antique-800
            text-sm
            text-white
          "

        >

          {
            type === "success"
            ?
            "✓"
            :
            "!"
          }

        </span>





        <p

          className="
            text-sm
            text-antique-800
          "

        >

          {message}

        </p>



      </div>



    </div>

  );

}