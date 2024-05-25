import { Helmet, HelmetProvider } from "react-helmet-async";
import Footer from "../Components/Footer";
import Particle from "../Components/Shared/Particle";
import TopBar from "../Components/TopBar";

export default function NotFound() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>404 Halaman Tidak Ditemukan</title>
        </Helmet>
      </HelmetProvider>
      <Particle />
      <TopBar className="relative z-10" />
      <div className="container mx-auto px-1 h-screen flex justify-center items-center">
        <div className="p-2">
          <div className="text-center text-indigo-400 text-5xl lg:text-8xl mb-3">404</div>
          <h1 className="text-center text-white text-2xl lg:text-5xl">Halaman Tidak Ditemukan</h1>
        </div>
      </div>
      <Footer />
    </>
  );
}
