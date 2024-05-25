import { TypeAnimation } from "react-type-animation";

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

      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="modalContact" className="modal">
        <div className="modal-box bg-indigo-500 text-white">
          <h3 className="font-bold text-xl text-center">Kontak Kami</h3>
          <hr />
          <ul className="mt-3">
            <li className="mb-2">
              <i className="bi bi-whatsapp text-2xl align-middle me-2"></i>
              <a href="" className="align-middle text-lg">
                08123456789
              </a>
            </li>
            <li className="mb-2">
              <i className="bi bi-telegram text-2xl align-middle me-2"></i>
              <a href="https://t.me/" className="align-middle text-lg underline">
                InertialCell
              </a>
            </li>
            <li className="mb-2">
              <i className="bi bi-facebook text-2xl align-middle me-2"></i>
              <a href="https://facebook.com/" className="align-middle text-lg underline">
                InertialCell
              </a>
            </li>
            <li className="mb-2">
              <i className="bi bi-instagram text-2xl align-middle me-2"></i>
              <a href="https://instagram.com" className="align-middle text-lg underline">
                @inertialcell
              </a>
            </li>
            <li>
              <i className="bi bi-envelope text-2xl align-middle me-2"></i>
              <a href="mailto:test@example.com" className="align-middle text-lg underline">
                test@example.com
              </a>
            </li>
          </ul>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
}
