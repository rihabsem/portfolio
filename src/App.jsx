import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Folder from "./components/Folder";
import Footer from "./components/Footer";

export default function App() {
  const [tab, setTab] = useState("about");

  return (
    <>
      <Navbar setTab={setTab} />
      <main>
        <Hero />
        <Folder tab={tab} setTab={setTab} />
      </main>
      <Footer />
    </>
  );
}