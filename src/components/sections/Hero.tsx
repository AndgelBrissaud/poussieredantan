import Container from "../layout/Container";
import heroImage from "../../assets/images/hero-meuble.webp";

export default function Hero() {
  return (
    <section
      className="
        relative
        overflow-hidden
        py-20
        md:py-32
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

          {/* Texte SEO */}
          <div>


            <p
              className="
                mb-6
                text-sm
                uppercase
                tracking-[0.35em]
                text-nature
              "
            >
              Aérogommage • Rénovation • Artisanat
            </p>


            <h1
              className="
                title-hero
              "
            >
              Aérogommage et rénovation
              <br />
              de meubles anciens
            </h1>


            <p
              className="
                mt-8
                text-content
                max-w-xl
              "
            >
              Poussière d'Antan redonne vie à vos meubles
              anciens grâce à l'aérogommage, une technique
              douce et écologique qui respecte le bois et
              révèle toute son authenticité.
            </p>


            <p
              className="
                mt-4
                text-content
                max-w-xl
              "
            >
              Artisan installé à Quillebeuf-sur-Seine,
              j'accompagne vos projets de restauration
              et de rénovation de mobilier.
            </p>


            <div
              className="
                mt-10
                flex
                flex-wrap
                gap-4
              "
            >

              <a
                href="#contact"
                className="button-primary"
              >
                Demander un devis
              </a>


              <a
                href="#realisations"
                className="button-secondary"
              >
                Voir les réalisations
              </a>

            </div>


          </div>


          {/* Image */}
          <div
            className="
              relative
            "
          >

            <img
              src={heroImage}
              alt="Meuble ancien rénové par aérogommage"
              className="
                rounded-soft
                shadow-antique
                w-full
                object-cover
              "
            />


          </div>


        </div>


      </Container>

    </section>
  );
}