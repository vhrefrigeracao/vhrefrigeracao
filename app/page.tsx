import ComoFunciona from "./components/ComoFunciona";
import ContactForm from "./components/ContactForm";
import CTAFinal from "./components/CTAFinal";
import Depoimentos from "./components/Depoimentos";
import Diferenciais from "./components/Diferencias";
import FAQ from "./components/FAQ";
import Hero from "./components/Hero";
import Services from "./components/Services";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Diferenciais />
      <ComoFunciona />
      <Depoimentos />
      <CTAFinal />
      <ContactForm />
      <FAQ />
    </>
  );
}
