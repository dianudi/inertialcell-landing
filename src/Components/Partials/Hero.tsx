import { TypeAnimation } from "react-type-animation";
import work from "../../Assets/Images/work.webp";
import ModalContact from "./ModalContact";
export default function Hero() {
  function showModal() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const modalDialog: any = document.querySelector("dialog#modalContact");
    modalDialog.showModal();
  }
  return (
    <div className="container mx-auto">
      {/* Hero start */}
      <div className="hero min-h-screen bg-transparent">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={work} className="max-w-xs lg:max-w-lg rounded-lg shadow-2xl shadow-indigo-100" alt="mobile repair working" />
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
              className="text-3xl lg:text-5xl text-white font-bold max-w-md"
            />
            <p className="py-6 text-white">
              Kami berpengalaman dalam memperbaiki segala kerusakan handphone dari yang termudah sampai tersulit. Cobalah layanan kami.
            </p>
            <div>
              <button className="btn btn-warning text-center md:text-start mb-3 me-3" onClick={() => showModal()}>
                <i className="bi bi-whatsapp"></i> Konsultasi Sekarang
              </button>
              <a href="#location" className="btn btn-info md:text-start">
                <i className="bi bi-geo-alt"></i> Cek Lokasi Kami
              </a>
            </div>
          </div>
        </div>
        {/* Hero end */}
      </div>

      <ModalContact />
    </div>
  );
}
