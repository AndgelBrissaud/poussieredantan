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
            lg:items-start
          "
        >

          {/* Colonne gauche : informations + carte */}
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
                📍 Quillebeuf-sur-Seine
              </p>


              <p className="text-content">
                Instagram : @poussieredantan27
              </p>

            </div>


            {/* Carte Google Maps */}
            <div
              className="
                mt-10
                overflow-hidden
                rounded-xl
                shadow-lg
              "
            >

              <iframe
                title="Localisation Poussière d'Antan"
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d956.1779759394917!2d0.5245854548397826!3d49.47253316135722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sfr!2sfr!4v1784569635635!5m2!1sfr!2sfr"
                width="100%"
                height="350"
                style={{
                  border: 0,
                }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
              />

            </div>


          </div>



          {/* Colonne droite : formulaire */}
          <div>

            <ContactForm />

          </div>


        </div>


      </Container>


    </section>
  );
}