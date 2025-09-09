import "./hero.css";
import heroImg from "../assets/hero _bg.png"; 

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>
          We Design <span className="highlight">Digital Experiences</span>
        </h1>
        <p>
          A creative design agency crafting unique and impactful products for
          brands worldwide.
        </p>
        <button className="cta-btn">Get Started</button>
      </div>

      <div className="hero-image">
        <img src={heroImg} alt="Hero Background" />
      </div>
    </section>
  );
}
