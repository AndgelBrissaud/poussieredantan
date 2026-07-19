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
            gap-4
            md:flex-row
            md:items-center
            md:justify-between
          "
        >

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
                text-sm
                text-antique-200
              "
            >
              Aérogommage et rénovation de meubles anciens
              à {siteConfig.location}.
            </p>

          </div>


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