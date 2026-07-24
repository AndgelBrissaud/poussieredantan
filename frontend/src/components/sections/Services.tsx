import Container from "../layout/Container";

const services = [
  {
    title: "Un décapage tout en douceur",
    text:
      "L'aérogommage permet de retirer les anciennes finitions, peintures ou vernis sans agresser le bois.",
  },

  {
    title: "Respect du mobilier ancien",
    text:
      "Chaque meuble possède son histoire. La technique utilisée préserve les détails, les formes et le caractère original du bois.",
  },

  {
    title: "Une rénovation écologique",
    text:
      "Cette méthode limite l'utilisation de produits chimiques et offre une alternative plus respectueuse de l'environnement.",
  },
];


export default function Services() {

  return (

    <section
      id="aerogommage"
      className="
        py-20
        md:py-32
        bg-white
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
            Notre savoir-faire
          </p>


          <h2 className="title-section">

            L'aérogommage,
            <br />
            une seconde vie pour vos meubles

          </h2>


          <p
            className="
              text-content
              mt-6
            "
          >

            Poussière d'Antan utilise une méthode douce
            pour révéler la beauté naturelle de vos meubles
            anciens et leur redonner toute leur authenticité.

          </p>


        </div>



        <div
          className="
            grid
            gap-8
            md:grid-cols-3
          "
        >

          {
            services.map((service) => (

              <article
                key={service.title}
                className="
                  rounded-soft
                  bg-antique-50
                  p-8
                  shadow-antique
                "
              >

                <h3
                  className="
                    font-display
                    text-2xl
                    text-antique-800
                  "
                >
                  {service.title}
                </h3>


                <p
                  className="
                    text-content
                    mt-4
                  "
                >
                  {service.text}
                </p>


              </article>

            ))
          }


        </div>


      </Container>

    </section>

  );

}