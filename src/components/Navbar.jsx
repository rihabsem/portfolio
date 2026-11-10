export default function Navbar({ setTab }) {
  return (
    <header className="navbar">
      <a href="#home" className="logo">Rihab Semmar</a>
      <nav>
        <a href="#folder" onClick={() => setTab("about")}>À propos</a>
        <a href="#folder" onClick={() => setTab("experience")}>Expérience</a>
        <a href="#folder" onClick={() => setTab("projects")}>Projets</a>
        <a href="#folder" onClick={() => setTab("contact")}>Contact</a>
      </nav>
    </header>
  );
}