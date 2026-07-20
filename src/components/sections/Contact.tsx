import Container from "../layout/Container";
import ContactForm from "../forms/ContactForm";

export default function Contact() {
  return (
    <section
      id="contact"
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
              Contact
            </p>


            <h2 className="title-section">

              Donnez une seconde vie
              à vos meubles anciens

            </h2>


            <p
              className="
                text-content
                mt-6
              "
            >
              Vous souhaitez restaurer un meuble,
              connaître les possibilités de rénovation
              ou obtenir un devis ?
            </p>


            <p
              className="
                text-content
                mt-4
              "
            >
              Contactez Poussière d'Antan pour échanger
              autour de votre projet.
            </p>


            <div
              className="
                mt-8
                space-y-4
              "
            >

              <p className="text-content">
                Quillebeuf-sur-Seine
              </p>


              <p className="text-content">
                Instagram : @poussieredantan27
              </p>


            </div>


          </div>



          {/* Formulaire */}
            <ContactForm />
        </div>


      </Container>


    </section>
  );
}