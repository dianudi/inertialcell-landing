import { Helmet, HelmetProvider } from "react-helmet-async";
import TopBar from "../Components/TopBar";
import Footer from "../Components/Footer";
import Particle from "../Components/Shared/Particle";

export default function Contact() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Kontak | Inertia Cell</title>
          <meta name="description" content="Halaman Kontak Kami InertiaCell" />
        </Helmet>
      </HelmetProvider>
      <Particle />
      <TopBar />
      <div className="container mx-auto my-3 text-white h-screen">
        <h1 className="text-4xl font-bold text-center">Kontak Kami</h1>
        <div className="flex flex-row flex-wrap p-2 gap-10">
          <div className="text-lg flex-grow">
            <p>Beberapa kontak untuk bisa menghubungi kami:</p>
            <ul className="ms-4">
              <li>
                Whatsapp:
                <a href="" className="ms-2 underline">
                  08123456789
                </a>
              </li>
              <li>
                Telegram:
                <a href="https://t.me" className="ms-2 underline">
                  InertiaCell
                </a>
              </li>
              <li>
                Instagram:
                <a href="https://instagram.com" className="ms-2 underline">
                  InertiaCell
                </a>
              </li>
              <li>
                Facebook:
                <a href="https://instagram.com" className="ms-2 underline">
                  InertiaCell
                </a>
              </li>
            </ul>
            <p>Jangan malu bertanya apa kebutuhanmu, kami akan selalu melayanimu</p>
          </div>
          <div className="flex-grow px-1">
            <h2 className="text-3xl font-bold text-center mt-3 md:mt-0 md:ms-2">Kirim Pesan</h2>
            <label className="form-control w-full max-w-lg">
              <div className="label">
                <span className="label-text text-white text-lg relative">
                  Nama <small className="text-red-500 absolute top-0 ms-1">*</small>
                </span>
              </div>
              <input type="text" placeholder="Nama" className="input input-bordered w-full max-w-lg text-black" />
            </label>
            <label className="form-control w-full max-w-lg">
              <div className="label">
                <span className="label-text text-white text-lg relative">
                  Email <small className="absolute text-red-600 top-0 ms-1">*</small>
                </span>
              </div>
              <input type="text" placeholder="Email" className="input input-bordered w-full max-w-lg text-black" />
            </label>
            <label className="form-control w-full max-w-lg">
              <div className="label">
                <span className="label-text text-white text-lg relative">
                  Pesan <small className="absolute text-red-500 top-0 ms-1">*</small>
                </span>
              </div>
              <textarea className="textarea text-black" placeholder="Pesan"></textarea>
            </label>
            <button className="btn bg-indigo-700 mt-3 text-white w-40">
              <i className="bi bi-send"></i> Kirim
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
