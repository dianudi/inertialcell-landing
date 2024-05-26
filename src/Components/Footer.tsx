import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="container mx-auto">
      <footer className="footer p-10 lg:place-items-center  text-white">
        <nav>
          <h3 className="footer-title">Layanan Perbaikan</h3>
          <Link to={"/layanan-perbaikan#handphone"} className="link link-hover">
            Perbaikan Handphone
          </Link>
          <Link to={"/layanan-perbaikan#komputer"} className="link link-hover">
            Perbaikan Komputer/Laptop
          </Link>
          <Link to={"/layanan-perbaikan#elektronik"} className="link link-hover">
            Perbaikan Perangkat Elektronik
          </Link>
        </nav>
        <nav>
          <h3 className="footer-title">Perusahaan</h3>
          <Link to={"/tentang-kami"} className="link link-hover">
            Tentang Kami
          </Link>
          <Link to={"/kontak"} className="link link-hover">
            Kontak
          </Link>
          <Link to={"/#location"} className="link link-hover">
            Lokasi
          </Link>
        </nav>
        <nav>
          <h3 className="footer-title">Sosial Media</h3>
          <a href="https://facebook.com/" className="link link-hover">
            Facebook
          </a>
          <a href="https://instagram.com/" className="link link-hover">
            Instagram
          </a>
        </nav>
      </footer>
      <footer className="footer px-10 py-4 border-t  text-white border-base-300">
        <aside className="items-center grid-flow-col">
          <p>
            © {new Date().getFullYear()} Inertia Cell <br />
          </p>
        </aside>
      </footer>
    </div>
  );
}
