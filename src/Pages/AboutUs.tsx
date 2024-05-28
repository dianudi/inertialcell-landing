import { Helmet, HelmetProvider } from "react-helmet-async";
import Particle from "../Components/Shared/Particle";
import Footer from "../Components/Footer";
import TopBar from "../Components/TopBar";
import staticRepairing from "../Assets/Images/static.webp";
export default function AboutUs() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Tentang Kami | Inertia Cell</title>
          <meta name="description" content="Halaman Tentang Kami InertiaCell" />
        </Helmet>
        <Particle />
        <TopBar />
        <div className="container mx-auto my-3 text-white px-2">
          <h1 className="text-4xl font-bold text-center mb-3">Tentang Kami</h1>

          <picture className="float-left">
            <img src={staticRepairing} className=" mx-auto md:max-w-md md:me-2 rounded-lg my-2" alt="static repairing" />
          </picture>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam alias porro repellendus velit, quaerat nostrum harum soluta ipsa quasi cum ea
            dolorem nobis eligendi odio obcaecati ad tempora atque aliquam nemo officia eum dolore illo vitae sequi. Dolore dicta illum ipsum magni suscipit ea
            eos temporibus alias ratione molestiae! Omnis.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut magnam totam eligendi vel tempore, maiores itaque assumenda aliquam voluptas odit ad
            minima expedita ab fugiat ratione, distinctio cupiditate voluptatem ipsam!
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut magnam totam eligendi vel tempore, maiores itaque assumenda aliquam voluptas odit ad
            minima expedita ab fugiat ratione, distinctio cupiditate voluptatem ipsam!
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut magnam totam eligendi vel tempore, maiores itaque assumenda aliquam voluptas odit ad
            minima expedita ab fugiat ratione, distinctio cupiditate voluptatem ipsam!
          </p>
        </div>
        <div className="container mx-auto my-3 text-white px-2 clear-left"></div>
        <Footer />
      </HelmetProvider>
    </>
  );
}
