export default function Map() {
  return (
    <section
      className="
        py-20
        bg-antique-50
      "
    >
      <div
        className="
          mx-auto
          max-w-6xl
          px-6
        "
      >

        <h2
          className="
            font-display
            text-4xl
            text-antique-800
          "
        >
          Nous trouver
        </h2>


        <p
          className="
            mt-3
            text-antique-600
          "
        >
          Poussière d'Antan est situé à Quillebeuf-sur-Seine.
          Nous intervenons pour vos projets de rénovation de meubles anciens.
        </p>


        <div
          className="
            mt-8
            overflow-hidden
            rounded-xl
            shadow-lg
          "
        >

          <iframe
            title="Localisation Poussière d'Antan"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d956.1779759394917!2d0.5245854548397826!3d49.47253316135722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sfr!2sfr!4v1784569635635!5m2!1sfr!2sfr"
            width="100%"
            height="450"
            style={{
              border: 0,
            }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          />

        </div>

      </div>
    </section>
  );
}