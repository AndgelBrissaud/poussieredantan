import { useState } from "react";
import Container from "./Container";

export default function Header() {

  const [menuOpen, setMenuOpen] = useState(false);


  const closeMenu = () => {
    setMenuOpen(false);
  };


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
            onClick={closeMenu}
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
              className="hover:text-antique-900 transition"
            >
              Savoir-faire
            </a>


            <a
              href="#realisations"
              className="hover:text-antique-900 transition"
            >
              Réalisations
            </a>


            <a
              href="#aerogommage"
              className="hover:text-antique-900 transition"
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


          {/* Bouton mobile */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="
              md:hidden
              text-antique-800
              text-3xl
            "
            aria-label="Ouvrir le menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? "✕" : "☰"}
          </button>


        </nav>


        {/* Menu mobile */}
        <div
          className={`
            md:hidden
            overflow-hidden
            transition-all
            duration-300
            ${
              menuOpen
                ? "max-h-96 opacity-100 pb-6"
                : "max-h-0 opacity-0"
            }
          `}
        >

          <div
            className="
              flex
              flex-col
              gap-5
              pt-4
              font-body
              text-antique-700
            "
          >

            <a
              href="#savoir-faire"
              onClick={closeMenu}
              className="hover:text-antique-900"
            >
              Savoir-faire
            </a>


            <a
              href="#realisations"
              onClick={closeMenu}
              className="hover:text-antique-900"
            >
              Réalisations
            </a>


            <a
              href="#aerogommage"
              onClick={closeMenu}
              className="hover:text-antique-900"
            >
              Aérogommage
            </a>


            <a
              href="#contact"
              onClick={closeMenu}
              className="
                button-primary
                text-center
                py-2
              "
            >
              Contact
            </a>

          </div>

        </div>


      </Container>

    </header>
  );
}