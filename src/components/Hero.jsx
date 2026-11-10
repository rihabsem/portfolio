export default function Hero() {
  return (
    <section id="home" className="hero">
      <p className="eyebrow">Développeure IA/ML x Logicielle</p>
      <h1>Je transforme les données et les modèles d’IA en applications qui servent vraiment.</h1>
      <p className="lead">Je m'appelle Rihab Semmar, étudiante ingénieure en double diplôme à
        IMT Mines-Télécom Alès et à l'ENSA Kénitra. Je recherche un stage de
        fin d'études de 6 mois à partir de mars 2027 en Machine Learning,
        IA appliquée ou Data Science.</p>
      <div className="actions">
        <a
          href="#folder"
          className="btn"
          onClick={() => setTab("projects")}
        >Voir mes projets</a>
        <a href="/cv.pdf" className="btn btn-outline" download>Télécharger mon CV</a>
      </div>
    </section>
  );
}