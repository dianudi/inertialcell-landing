export default function ModalContact() {
  return (
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
              Inertia Cell
            </a>
          </li>
          <li className="mb-2">
            <i className="bi bi-facebook text-2xl align-middle me-2"></i>
            <a href="https://facebook.com/" className="align-middle text-lg underline">
              Inertia Cell
            </a>
          </li>
          <li className="mb-2">
            <i className="bi bi-instagram text-2xl align-middle me-2"></i>
            <a href="https://instagram.com" className="align-middle text-lg underline">
              @inertiacell
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
  );
}
