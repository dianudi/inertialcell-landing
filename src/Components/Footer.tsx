export default function Footer() {
  return (
    <div className="container mx-auto">
      <footer className="footer p-10 lg:place-items-center  text-white">
        <nav>
          <h6 className="footer-title">Layanan Perbaikan</h6>
          <a className="link link-hover">Perbaikan Handphone</a>
          <a className="link link-hover">Perbaikan Komputer/Laptop</a>
          <a className="link link-hover">Perbaikan Perangkat Elektronik</a>
        </nav>
        <nav>
          <h6 className="footer-title">Perusahaan</h6>
          <a className="link link-hover">Tentang Kami</a>
          <a className="link link-hover">Kontak</a>
          <a className="link link-hover">Lokasi</a>
        </nav>
        <nav>
          <h6 className="footer-title">Sosial Media</h6>
          <a className="link link-hover">Facebook</a>
          <a className="link link-hover">Instagram</a>
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
