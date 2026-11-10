import About from "./About";
import ProjectList from "./ProjectList";
import Contact from "./Contact";
import { experiences } from "../data/experiences";
import { projects } from "../data/projet";

const tabs = [
  { id: "about", label: "À propos", render: () => <About /> },
  {
    id: "experience",
    label: "Expérience",
    render: () => (
      <ProjectList title="Expériences professionnelles" items={experiences} />
    ),
  },
  {
    id: "projects",
    label: "Projets",
    render: () => (
      <ProjectList title="Projets personnels & académiques" items={projects} />
    ),
  },
  { id: "contact", label: "Contact", render: () => <Contact /> },
];

export default function Folder({ tab, setTab }) {
  const current = tabs.find((t) => t.id === tab);

  return (
    <section id="folder" className="desk">
      <div className="tabs" role="tablist">
        {tabs.map((t) => (
          <button
            key={t.id}
            role="tab"
            aria-selected={tab === t.id}
            className={`tab ${tab === t.id ? "active" : ""}`}
            onClick={() => setTab(t.id)}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="folder-body">
        <div className="paper" key={tab}>
          {current.render()}
        </div>
      </div>
    </section>
  );
}