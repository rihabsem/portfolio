const softSkills = [
  "Analyse",
  "Esprit de synthèse",
  "Travail en équipe",
  "Autonomie",
  "Rigueur",
  "Communication",
];

const dataIA = [
  "Python",
  "Pandas",
  "Scikit-learn",
  "PyTorch",
  "LLM & RAG",
  "Embeddings",
  "ChromaDB",
  "Data Cleaning",
  "Web Scraping",
];

const devTools = [
  "React",
  "FastAPI",
  "Laravel / Vue.js",
  "PostgreSQL / MySQL",
  "Docker",
  "Git",
  "Jenkins / GitLab CI",
  "MLOps",
  "BPMN / UML",
];

export default function About() {
  return (
    <div>
      <h2>À propos de moi</h2>

      <div className="about-layout">
        <figure className="pinned">
          <span className="tape" />
          <img src="/photo.jpg" alt="Portrait de Rihab Semmar" />
          <figcaption>Rihab Semmar</figcaption>
        </figure>

        <p>
          Étudiante en double diplôme (IA & Data Science à IMT Mines-Télécom
          Alès, Génie Logiciel à l'ENSA Kénitra), j'aime relier la recherche
          en IA et le développement logiciel. Lors de mon stage à l'hôpital
          ERASME, j'ai conçu une application de veille scientifique qui
          utilise un LLM et des embeddings pour recommander aux chercheurs
          les publications les plus pertinentes.
        </p>
      </div>

      <div className="cols">
        <div>
          <h3>Soft skills</h3>
          <ul className="list">
            {softSkills.map((s) => <li key={s}>{s}</li>)}
          </ul>
        </div>

        <div>
          <h3>Data & IA</h3>
          <ul className="list">
            {dataIA.map((s) => <li key={s}>{s}</li>)}
          </ul>
        </div>

        <div>
          <h3>Développement & outils</h3>
          <ul className="list">
            {devTools.map((s) => <li key={s}>{s}</li>)}
          </ul>
        </div>
      </div>
    </div>
  );
}