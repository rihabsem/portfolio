import { projects } from "../data/experiences";

export default function Projects() {
  return (
    <div>
      <h2>Mes stages</h2>
      <div className="cards">
        {projects.map((p) => {
          const Wrapper = p.link ? "a" : "div";
          const props = p.link
            ? { href: p.link, target: "_blank", rel: "noreferrer" }
            : {};
          return (
            <Wrapper key={p.id} className="card" {...props}>
              <span className="num">{p.id}</span>
              <h3>{p.title}</h3>
              <h4><a href={p.link}>
                {p.location}
              </a></h4>
              <p>{p.description}</p>
              <div className="tags">
                {p.tags.map((t) => <span key={t}>{t}</span>)}
              </div>
            </Wrapper>
          );
        })}
      </div>
    </div>
  );
}