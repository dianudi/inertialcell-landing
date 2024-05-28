import { Helmet, HelmetProvider } from "react-helmet-async";
import Particle from "../Components/Shared/Particle";
import TopBar from "../Components/TopBar";
import Footer from "../Components/Footer";
import mobileRepair from "../Assets/Images/mobile_repair.webp";
import computerRepair from "../Assets/Images/computer_repair.webp";
import electronicRepair from "../Assets/Images/electronic_repair.webp";
export default function RepairServices() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Layanan Perbaikan | Inertia Cell</title>
          <meta name="description" content="Layanan perbaikan inertia cell" />
        </Helmet>
      </HelmetProvider>
      <Particle />
      <TopBar />
      <div className="container mx-auto px-2 mt-2 text-white">
        <h1 className="text-4xl font-bold text-center mb-2">Layanan Perbaikan</h1>
        <div className="mx-auto lg:w-[500px] my-10 p-3">
          <h2 className="text-2xl text-center font-bold">Semua Bisa Kami Lakukan</h2>
          <p className="text-center">Tidak hanya perbaikan handphone saja kami pun bisa mereparasi perangkat elektronik lain</p>
        </div>
        <div className="max-w-[80rem] mx-auto">
          <div className="flex flex-wrap gap-1">
            <picture className="flex-2">
              <img className="md:h-96 object-cover object-center w-full rounded-md" src={mobileRepair} alt="" />
            </picture>
            <div className="flex-1 rounded p-5 ">
              <h3 className="text-2xl font-bold text-center mb-3" id="handphone">
                Perbaikan Handphone/Smartphone
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, reiciendis cumque! Pariatur maiores rem, odio accusamus commodi optio
                tempora incidunt. Autem quos, ipsam deserunt suscipit eligendi animi corrupti consequatur optio.
              </p>
            </div>
          </div>

          <div className="flex flex-row-reverse flex-wrap gap-1 my-3">
            <picture className="flex-2">
              <img className="md:h-96 object-cover object-center w-full rounded-md" src={computerRepair} alt="" />
            </picture>
            <div className="flex-1 rounded p-5 ">
              <h3 className="text-2xl font-bold text-center mb-3" id="komputer">
                Perbaikan Komputer/Laptop
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, reiciendis cumque! Pariatur maiores rem, odio accusamus commodi optio
                tempora incidunt. Autem quos, ipsam deserunt suscipit eligendi animi corrupti consequatur optio.
              </p>
            </div>
          </div>

          <div className="flex gap-1 flex-wrap">
            <picture className="flex-2">
              <img className="md:h-96 object-cover object-center w-full rounded-md" src={electronicRepair} alt="" />
            </picture>
            <div className="flex-1 rounded p-5 ">
              <h3 className="text-2xl font-bold text-center mb-3" id="elektronik">
                Perbaikan Elektronik Lain
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, reiciendis cumque! Pariatur maiores rem, odio accusamus commodi optio
                tempora incidunt. Autem quos, ipsam deserunt suscipit eligendi animi corrupti consequatur optio.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
