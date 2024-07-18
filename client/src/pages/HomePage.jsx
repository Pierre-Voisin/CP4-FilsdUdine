import photoHome from "../assets/images/photohome.jpg";
import "./HomePage.css";

export default function HomePage() {
  return (
    <div>
      <h1>fils d'Udine</h1>

      <img src={photoHome} alt="photoHomme" className="imagehome" />

      <p className="texthome">
        Bienvenue sur Fils d'Udine, votre boutique en ligne spécialisée dans les
        peluches, poupées et textiles faits main au crochet. Chaque création
        apporte une touche unique de douceur et de charme à votre quotidien.
        Découvrez notre collection artisanale et laissez-vous séduire par la
        magie du crochet.
      </p>
    </div>
  );
}
