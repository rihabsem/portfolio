export default function ProjectList({ title, items }) {
  return (
    <div>
      <h2>{title}</h2>
      <div className="cards">
        {items.map((p) => {
          const Wrapper = p.link ? "a" : "div";
          const props = p.link
            ? { href: p.link, target: "_blank", rel: "noreferrer" }
            : {};
          return (
            <Wrapper key={p.id} className="card" {...props}>
              <span className="num">{p.id}</span>
              <h3>{p.title}</h3>
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