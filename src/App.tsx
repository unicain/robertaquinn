import Header from "./components/Header";
import Hero from "./components/Hero";
import Servicos from "./components/Servicos";
import Diferenciais from "./components/Diferenciais";
import SobreRoberta from "./components/SobreRoberta";
import Localizacao from "./components/Localizacao";
import FAQ from "./components/FAQ";
import Contato from "./components/Contato";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-cream text-ink antialiased">
      <Header />
      <main>
        <Hero />
        <Servicos />
        <Diferenciais />
        <SobreRoberta />
        <Localizacao />
        <FAQ />
        <Contato />
      </main>
      <Footer />
    </div>
  );
}
