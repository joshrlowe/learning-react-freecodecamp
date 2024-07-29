export default function Hero({ image, title, description }) {
  return (
    <section className="hero">
      <img src={image} alt="Hero" className="hero--photo" />
      <h1 className="hero--header">{title}</h1>
      <p className="hero--text">{description}</p>
    </section>
  );
}
