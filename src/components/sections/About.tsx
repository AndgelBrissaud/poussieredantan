import Container from "../layout/Container";

export default function About() {
  return (
    <section
      id="savoir-faire"
      className="
        py-20
        md:py-32
        bg-antique-50
      "
    >

      <Container>

        <div
          className="
            grid
            gap-12
            lg:grid-cols-2
            lg:items-center
          "
        >

          {/* Texte */}
          <div>

            <p
              className="
                mb-4
                text-sm
                uppercase
                tracking-[0.3em]
                text-nature
              "
            >
              Poussière d'Antan
            </p>


            <h2
              className="
                title-section
              "
            >
              Redonner vie aux meubles
              qui ont une histoire
            </h2>


            <p
              className="
                text-content
                mt-6
              "
            >
              Chaque meuble ancien possède une histoire.
              Chez Poussière d'Antan, nous travaillons
              avec soin pour préserver son caractère et
              révéler la beauté naturelle du bois.
            </p>


            <p
              className="
                text-content
                mt-4
              "
            >
              L'aérogommage permet un décapage précis
              et respectueux afin de préparer vos meubles
              pour une nouvelle vie.
            </p>


            <p
              className="
                text-content
                mt-4
              "
            >
              Installé à Quillebeuf-sur-Seine, Poussière
              d'Antan accompagne les particuliers dans
              leurs projets de rénovation de mobilier ancien.
            </p>


          </div>



          {/* Valeurs */}
          <div
            className="
              space-y-6
            "
          >

            <div
              className="
                rounded-soft
                bg-white
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
                Respect du bois
              </h3>

              <p
                className="
                  text-content
                  mt-3
                "
              >
                Une méthode douce adaptée aux meubles
                anciens et aux matériaux délicats.
              </p>

            </div>



            <div
              className="
                rounded-soft
                bg-white
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
                Travail artisanal
              </h3>

              <p
                className="
                  text-content
                  mt-3
                "
              >
                Chaque pièce est traitée avec attention
                et patience.
              </p>

            </div>


          </div>


        </div>

      </Container>

    </section>
  );
}