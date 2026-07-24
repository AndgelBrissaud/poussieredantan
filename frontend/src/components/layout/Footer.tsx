import Container from "./Container";
import { siteConfig } from "../../config/site";

export default function Footer() {
  return (
    <footer
      className="
        mt-20
        bg-antique-800
        py-10
        text-antique-100
      "
    >
      <Container>

        <div
          className="
            flex
            flex-col
            gap-6
            md:flex-row
            md:items-center
            md:justify-between
          "
        >

          {/* Informations entreprise */}
          <div>

            <p
              className="
                font-display
                text-2xl
              "
            >
              {siteConfig.name}
            </p>


            <p
              className="
                mt-2
                max-w-md
                text-sm
                text-antique-200
              "
            >
              Aérogommage et rénovation de meubles anciens
              à {siteConfig.location}.
            </p>


            {/* Instagram */}
            <a
              href={siteConfig.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="
                mt-4
                inline-flex
                items-center
                gap-2
                text-antique-200
                transition
                hover:text-white
              "
              aria-label="Instagram Poussière d'Antan"
            >

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6"
              >
                <path
                  d="
                    M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9
                    a5.5 5.5 0 0 1-5.5 5.5h-9
                    A5.5 5.5 0 0 1 2 16.5v-9
                    A5.5 5.5 0 0 1 7.5 2Zm0 2
                    A3.5 3.5 0 0 0 4 7.5v9
                    A3.5 3.5 0 0 0 7.5 20h9
                    a3.5 3.5 0 0 0 3.5-3.5v-9
                    A3.5 3.5 0 0 0 16.5 4h-9Zm9.75 1.5
                    a1.25 1.25 0 1 1 0 2.5
                    1.25 1.25 0 0 1 0-2.5ZM12 7
                    a5 5 0 1 1 0 10
                    5 5 0 0 1 0-10Zm0 2
                    a3 3 0 1 0 0 6
                    3 3 0 0 0 0-6Z
                  "
                />
              </svg>


              <span className="text-sm">
                Instagram
              </span>

            </a>

          </div>


          {/* Copyright */}
          <p
            className="
              text-sm
              text-antique-300
            "
          >
            © {new Date().getFullYear()} {siteConfig.name}
          </p>


        </div>

      </Container>

    </footer>
  );
}