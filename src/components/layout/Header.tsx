import Container from "./Container";

export default function Header() {
  return (
    <header
      className="
        sticky
        top-0
        z-50
        bg-antique-50/90
        backdrop-blur
        border-b
        border-antique-200
      "
    >

      <Container>

        <nav
          className="
            flex
            h-20
            items-center
            justify-between
          "
        >

          {/* Logo */}
          <a
            href="/"
            className="
              font-display
              text-3xl
              text-antique-800
            "
          >
            Poussière d'Antan
          </a>


          {/* Navigation desktop */}
          <div
            className="
              hidden
              md:flex
              items-center
              gap-8
              font-body
              text-antique-700
            "
          >

            <a
              href="#savoir-faire"
              className="
                hover:text-antique-900
                transition
              "
            >
              Savoir-faire
            </a>


            <a
              href="#realisations"
              className="
                hover:text-antique-900
                transition
              "
            >
              Réalisations
            </a>


            <a
              href="#aerogommage"
              className="
                hover:text-antique-900
                transition
              "
            >
              Aérogommage
            </a>


            <a
              href="#contact"
              className="
                button-primary
                py-2
                px-5
              "
            >
              Contact
            </a>

          </div>


          {/* Menu mobile provisoire */}
          <button
            className="
              md:hidden
              text-antique-800
              text-2xl
            "
            aria-label="Ouvrir le menu"
          >
            ☰
          </button>


        </nav>

      </Container>

    </header>
  );
}