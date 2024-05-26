import { useState } from "react";
import { Link } from "react-router-dom";

type Topbar = {
  className?: string;
};
export default function TopBar(props: Topbar) {
  const [menuClicked, setMenuClicked] = useState(false);
  return (
    <div>
      <nav className={`navbar justify-between ${props.className}`}>
        <div className="flex container mx-auto">
          <Link to={"/"} className="btn btn-ghost text-3xl relative">
            <span className="text-white">Inertia</span>
            <span className="text-pink-600">Cell</span>
            <i className="bi bi-tools text-lg animate-pulse text-red-500 absolute top-0 -right-1"></i>
          </Link>
          <ul className="ms-20 hidden lg:flex gap-5 ">
            <li>
              <Link className="text-red-500" to={"/"}>
                Beranda
              </Link>
            </li>
            <li>
              <Link to={"/layanan-perbaikan"} className="text-white">
                Layanan Perbaikan
              </Link>
            </li>
            <li>
              <Link to={"/galeri"} className="text-white">
                Galeri
              </Link>
            </li>
            <li>
              <Link to={"/tentang-kami"} className="text-white">
                Tentang Kami
              </Link>
            </li>
            <li>
              <Link to={"/kontak"} className="text-white">
                Kontak
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <button
            className={`block md:hidden transition text-white text-4xl bi ${menuClicked ? "bi-x-lg" : "bi-list"}`}
            onClick={() => setMenuClicked((menuClicked) => !menuClicked)}
            aria-label="navbar menu"
          ></button>
        </div>
      </nav>
      <div className={`transition-all duration-500 bg-indigo-800 py-4 ${menuClicked ? "" : "hidden"} px-2 md:hidden`}>
        <ul className="flex flex-col gap-2">
          <li>
            <Link className="text-red-500" to={"/"}>
              Beranda
            </Link>
          </li>
          <li>
            <Link to={"/layanan-perbaikan"} className="text-white">
              Layanan Perbaikan
            </Link>
          </li>
          <li>
            <Link to={"/galeri"} className="text-white">
              Galeri
            </Link>
          </li>
          <li>
            <Link to={"/tentang-kami"} className="text-white">
              Tentang Kami
            </Link>
          </li>
          <li>
            <Link to={"/kontak"} className="text-white">
              Kontak
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
