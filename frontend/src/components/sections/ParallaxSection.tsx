import ParallaxImage from "../ParallaxImage";
import atelierImage from "../../assets/images/hero/atelier.webp";


export default function ParallaxSection() {

  return (

    <ParallaxImage
      image={atelierImage}
      title="Chaque meuble possède une histoire"
      text="Nous restaurons vos meubles anciens avec patience et respect afin de révéler leur caractère et leur authenticité."
    />

  );
}