import "./brand.css";
import brand1 from "../assets/bmw.png";
import brand2 from "../assets/google.png";
import brand3 from "../assets/x.png";
import brand4 from "../assets/lakme.png";

export default function Brands() {
  return (
    <section className="brands">
      <h2>Trusted by Leading Brands</h2>
      <div className="brand-logos">
        <img src={brand1} alt="Brand 1" />
        <img src={brand2} alt="Brand 2" />
        <img src={brand3} alt="Brand 3" />
        <img src={brand4} alt="Brand 4" />
      </div>
    </section>
  );
}
