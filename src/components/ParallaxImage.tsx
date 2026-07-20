interface ParallaxImageProps {
  image: string;
  title?: string;
  text?: string;
}


export default function ParallaxImage({
  image,
  title,
  text,
}: ParallaxImageProps) {

  return (
    <section
      className="
        relative
        h-[500px]
        overflow-hidden
        bg-fixed
        bg-cover
        bg-center
      "
      style={{
        backgroundImage: `url(${image})`,
      }}
    >

      <div
        className="
          absolute
          inset-0
          bg-antique-900/50
        "
      />


      <div
        className="
          relative
          z-10
          flex
          h-full
          items-center
          justify-center
          text-center
          px-6
        "
      >

        <div>

          {
            title && (
              <h2
                className="
                  title-section
                  text-white
                "
              >
                {title}
              </h2>
            )
          }


          {
            text && (
              <p
                className="
                  mt-6
                  max-w-2xl
                  text-lg
                  text-white/90
                "
              >
                {text}
              </p>
            )
          }

        </div>

      </div>

    </section>
  );
}