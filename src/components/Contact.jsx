import { useState } from "react";

const EMAIL = "semrihab@gmail.com";
const SUBJECT = "Prise de contact";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const gmailUrl =
    "https://mail.google.com/mail/?view=cm&fs=1" +
    `&to=${EMAIL}&su=${encodeURIComponent(SUBJECT)}`;

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.prompt("Copiez l'adresse :", EMAIL);
    }
  };

  return (
    <div className="contact-page">
      <h2>Travaillons ensemble</h2>
      <p>
        Je recherche un stage de fin d'études de 6 mois à partir de mars 2027.
        Une question, une opportunité ? Écrivez-moi.
      </p>

      <p className="email-line">{EMAIL}</p>

      <div className="actions contact-actions">
        <a className="btn" href={gmailUrl} target="_blank" rel="noreferrer">
          Écrire via Gmail
        </a>
        <a
          className="btn btn-outline"
          href={`mailto:${EMAIL}?subject=${encodeURIComponent(SUBJECT)}`}
        >
          Ouvrir ma messagerie
        </a>
        <button type="button" className="btn btn-outline" onClick={copyEmail}>
          {copied ? "Adresse copiée ✓" : "Copier l'adresse"}
        </button>
      </div>

      <div className="socials">
        <a href="https://www.linkedin.com/in/rihab-semmar-a58814291/" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="https://github.com/rihabsem" target="_blank" rel="noreferrer">GitHub</a>
      </div>
    </div>
  );
}