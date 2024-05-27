import { Helmet, HelmetProvider } from "react-helmet-async";
import Particle from "../Components/Shared/Particle";
import TopBar from "../Components/TopBar";
import Footer from "../Components/Footer";
import gal1 from "../Assets/Images/Galleries/1.webp";
import gal2 from "../Assets/Images/Galleries/2.webp";
import gal3 from "../Assets/Images/Galleries/3.webp";
import gal4 from "../Assets/Images/Galleries/4.webp";
import gal5 from "../Assets/Images/Galleries/5.webp";
import gal6 from "../Assets/Images/Galleries/6.webp";
import gal7 from "../Assets/Images/Galleries/7.webp";
import gal8 from "../Assets/Images/Galleries/8.webp";
import gal9 from "../Assets/Images/Galleries/9.webp";

export default function Gallery() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Galery | Inertia Cell</title>
          <meta name="description" content="Galeri Inertia Cell" />
        </Helmet>
      </HelmetProvider>
      <Particle />
      <TopBar />
      <div className="container mx-auto my-3 px-2 text-white">
        <h1 className="text-4xl font-bold text-center mb-2">Galeri</h1>
        <p>Foto dokumentasi perbaikan di Inertia Cell</p>
        <div className="grid gap-y-1 gap-x-1 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mt-2">
          <picture>
            <img className="object-cover object-center h-64 rounded-lg w-full max-w-full md:max-h-[50rem]" src={gal1} alt="" />
          </picture>
          <picture>
            <img className="object-cover object-center h-64 rounded-lg w-full max-w-full lg:max-h-[50rem]" src={gal2} alt="" />
          </picture>
          <picture>
            <img className="object-cover object-center h-64 rounded-lg w-full max-w-full lg:max-h-[50rem]" src={gal3} alt="" />
          </picture>
          <picture>
            <img className="object-cover object-center h-64 rounded-lg w-full max-w-full lg:max-h-[50rem]" src={gal4} alt="" />
          </picture>
          <picture>
            <img className="object-cover object-center h-64 rounded-lg w-full max-w-full lg:max-h-[50rem]" src={gal5} alt="" />
          </picture>
          <picture>
            <img className="object-cover object-center h-64 rounded-lg w-full max-w-full lg:max-h-[50rem]" src={gal6} alt="" />
          </picture>
          <picture>
            <img className="object-cover object-center h-64 rounded-lg w-full max-w-full lg:max-h-[50rem]" src={gal7} alt="" />
          </picture>
          <picture>
            <img className="object-cover object-center h-64 rounded-lg w-full max-w-full lg:max-h-[50rem]" src={gal8} alt="" />
          </picture>
          <picture>
            <img className="object-cover object-center h-64 rounded-lg w-full max-w-full lg:max-h-[50rem]" src={gal9} alt="" />
          </picture>
        </div>
      </div>
      <Footer />
    </>
  );
}
