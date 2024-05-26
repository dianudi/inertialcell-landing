import TopBar from "../Components/TopBar";
import Footer from "../Components/Footer";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Hero from "../Components/Partials/Hero";
import ChooseMeSection from "../Components/Partials/ChooseMeSection";
import TestimonialsSection from "../Components/Partials/TestimonialsSection";
import LocationSection from "../Components/Partials/LocationSection";
import Particle from "../Components/Shared/Particle";

export default function Home() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Service Handphone Terbaik | Inertia Cell</title>
          <meta name="description" content="Service Handphone Terbaik | Inertia Cell" />
        </Helmet>
      </HelmetProvider>
      <Particle />
      <TopBar />
      <Hero />

      <ChooseMeSection />
      <TestimonialsSection />
      <LocationSection />
      <Footer />
    </>
  );
}
