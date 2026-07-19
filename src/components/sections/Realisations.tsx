import Container from "../layout/Container";
import { realisationsImages } from "../../utils/images";


const realisations = realisationsImages.map(
  (image, index) => ({
    image,
    title: `Réalisation ${index + 1}`,
    description:
      "Rénovation d'un meuble ancien par aérogommage.",
  })
);


export default function Realisations() {

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
            max-w-3xl
            mb-16
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
          <h2 className="title-section">
            Des meubles anciens
            <br />
            qui retrouvent leur histoire
          </h2>
          <p className="text-content mt-6">
            Chaque rénovation est réalisée avec soin afin
            de préserver l'âme et le caractère du mobilier.
          </p>
        </div>
        <div
  className="
    grid
    gap-10
    md:grid-cols-3
  "
>

  {realisations.length > 0 ? (

    realisations.map((item) => (

      <article
        key={item.image}
        className="
          overflow-hidden
          rounded-soft
          bg-white
          shadow-antique
        "
      >

        <img
          src={item.image}
          alt={item.title}
          className="
            h-72
            w-full
            object-cover
          "
        />


        <div
          className="
            p-6
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
              text-content
              mt-3
            "
          >
            {item.description}
          </p>


        </div>

      </article>

    ))

  ) : (

    <div
      className="
        md:col-span-3
        rounded-soft
        bg-antique-50
        p-10
        text-center
      "
    >

      <h3
        className="
          font-display
          text-2xl
          text-antique-800
        "
      >
        Nos prochaines réalisations arrivent bientôt
      </h3>


      <p
        className="
          mt-4
          text-content
        "
      >
        Découvrez prochainement les meubles anciens
        rénovés par Poussière d'Antan.
      </p>


    </div>

  )}

</div>
      </Container>
    </section>

  );

}