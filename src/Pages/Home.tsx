import { useEffect, useState } from "react";
import TopBar from "../Components/TopBar";
import { TypeAnimation } from "react-type-animation";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
import Footer from "../Components/Footer";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

export default function Home() {
  const [init, setInit] = useState(false);
  const position = [51.505, -0.09];
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Inertia Cell | Service Handphone Terbaik</title>
          <meta name="theme-color" content="#4a00ff" />
        </Helmet>
      </HelmetProvider>
      <div className="relative -z-10">
        {init && (
          <Particles
            id="tsparticles"
            options={{
              background: {
                color: {
                  value: "#4a00ff",
                },
              },
              fpsLimit: 60,
              interactivity: {
                events: {
                  onClick: {
                    enable: false,
                    mode: "push",
                  },
                  onHover: {
                    enable: true,
                    mode: "repulse",
                  },
                  // resize: true,
                },
                modes: {
                  push: {
                    quantity: 4,
                  },
                  repulse: {
                    distance: 200,
                    duration: 0.4,
                  },
                },
              },
              particles: {
                color: {
                  value: "#ffffff",
                },
                links: {
                  color: "#ffffff",
                  distance: 150,
                  enable: true,
                  opacity: 0.5,
                  width: 1,
                },
                move: {
                  direction: "none",
                  enable: true,
                  outModes: {
                    default: "bounce",
                  },
                  random: true,
                  speed: 6,
                  straight: false,
                },
                number: {
                  density: {
                    enable: true,
                    // area: 800,
                  },
                  value: 200,
                },
                opacity: {
                  value: 0.5,
                },
                shape: {
                  type: "circle",
                },
                size: {
                  value: { min: 1, max: 5 },
                },
              },
              detectRetina: true,
            }}
          />
        )}
      </div>
      <TopBar />

      <div className="container mx-auto">
        {/* Hero start */}
        <div className="hero min-h-screen bg-transparent">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              src="https://img.freepik.com/free-photo/repairman-s-workplace-with-cell-phone-special-tools-desk_343059-481.jpg?w=1380&t=st=1716388319~exp=1716388919~hmac=64d5ea02bf65749caa23a0d3ce70d5e8be9beb1484f333ed5611c952fe8e97ac"
              className="max-w-xs lg:max-w-lg rounded-lg shadow-2xl shadow-indigo-100"
            />
            <div>
              <TypeAnimation
                sequence={[
                  "HPmu Mati Total?",
                  2000,
                  "HPmu Layarnya Pecah?",
                  2000,
                  "HPmu Tidak Ada Suaranya?",
                  2000,
                  "HPmu Bermasalah? Perbaiki Disini Aja", // Types 'Three' without deleting 'Two'
                ]}
                wrapper="h1"
                cursor={true}
                repeat={0}
                // style={{ fontSize: "2em", display: "inline-block" }}
                className="text-3xl lg:text-5xl text-indigo-100 font-bold max-w-md"
              />
              <p className="py-6 text-white">
                Kami berpengalaman dalam memperbaiki segala kerusakan handphone dari yang termudah sampai tersulit. Cobalah layanan kami.
              </p>
              <div>
                <button className="btn btn-warning text-center md:text-start mb-3 me-3">
                  <i className="bi bi-whatsapp"></i> Konsultasi Sekarang
                </button>
                <button className="btn btn-info md:text-start">
                  <i className="bi bi-geo-alt"></i> Cek Lokasi Kami
                </button>
              </div>
            </div>
          </div>
          {/* Hero end */}
        </div>
      </div>
      <div className="container mx-auto px-4">
        <h2 className="text-center text-4xl font-bold text-indigo-100 ">Mengapa Harus Kami</h2>
        <div className="flex flex-wrap lg:flex-row justify-center  gap-5 my-5">
          <div className="card w-96 bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 text-primary-content">
            <div className="card-body">
              <h2 className="card-title">
                <i className="bi bi-lightning text-yellow-500 animate-pulse"></i> Cepat
              </h2>
              <p>Kami sudah berpengalaman selama bertahun-tahun untuk menganalisa segala permasalahan</p>
            </div>
          </div>

          <div className="card w-96 bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 text-primary-content">
            <div className="card-body">
              <h2 className="card-title">
                <i className="bi bi-clock-history text-red-600 animate-pulse"></i> Bergaransi
              </h2>
              <p>Kami memberikan garansi ke pelanggan kami tergantung apa permasalahannya</p>
            </div>
          </div>

          <div className="card w-96 bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 text-primary-content">
            <div className="card-body">
              <h2 className="card-title">
                <i className="bi bi-people text-green-500"></i> Pelayanan Terbaik
              </h2>
              <p>Kami memiliki tim dengan melayani sepenuh hati</p>
            </div>
          </div>

          <div className="card w-96 bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 text-primary-content">
            <div className="card-body">
              <h2 className="card-title">
                <i className="bi bi-clipboard-data-fill text-green-500"></i> Kualitas
              </h2>
              <p>Kualitas pemilihan spartpart yang paling bagus</p>
            </div>
          </div>

          <div className="card w-96 bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 text-primary-content">
            <div className="card-body">
              <h2 className="card-title">
                <i className="bi bi-shop text-green-500"></i>Online Store
              </h2>
              <p>Kami mempunyai E-Commerce untuk menjual komponen yang tidak terpakai</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-1">
        <h2 className="text-center text-indigo-100 text-4xl font-bold">Lokasi</h2>
        <div className="mt-2">
          <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
              <Popup>Inertia Cell</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Footer />
    </>
  );
}
