import Container from "../layout/Container";

export default function Hero() {

  return (

    <section className="
      py-24
      md:py-32
    ">

      <Container>

        <div className="
          max-w-3xl
        ">

          <p className="
            mb-6
            uppercase
            tracking-[0.3em]
            text-sm
            text-nature
          ">
            Artisanat • Aérogommage • Rénovation
          </p>


          <h1 className="title-hero">

            Redonnez vie
            <br />
            à vos meubles anciens

          </h1>


          <p className="
            text-content
            mt-8
            max-w-xl
          ">

            Poussière d'Antan accompagne la rénovation
            de vos meubles grâce à l'aérogommage,
            une méthode douce et écologique qui respecte
            le bois et révèle son authenticité.

          </p>


          <div className="
            mt-10
            flex
            gap-4
            flex-wrap
          ">

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
              Découvrir les réalisations
            </a>

          </div>


        </div>

      </Container>

    </section>

  );

}