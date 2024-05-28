import { useState } from "react";
import { NavLink } from "react-router-dom";

type Topbar = {
  className?: string;
};
export default function TopBar(props: Topbar) {
  const [menuClicked, setMenuClicked] = useState(false);
  return (
    <div>
      <nav className={`navbar justify-between ${props.className}`}>
        <div className="flex container mx-auto">
          <NavLink to={"/"} className="btn btn-ghost text-3xl relative">
            <span className="text-white">Inertia</span>
            <span className="text-pink-600">Cell</span>
            <i className="bi bi-tools text-lg animate-pulse text-red-500 absolute top-0 -right-1"></i>
          </NavLink>
          <ul className="ms-20 hidden lg:flex gap-5 ">
            <li>
              <NavLink className={({ isActive }) => (isActive ? "text-red-500" : "text-white")} to={"/"}>
                Beranda
              </NavLink>
            </li>
            <li>
              <NavLink to={"/layanan-perbaikan"} className={({ isActive }) => (isActive ? "text-red-500" : "text-white")}>
                Layanan Perbaikan
              </NavLink>
            </li>
            <li>
              <NavLink to={"/galeri"} className={({ isActive }) => (isActive ? "text-red-500" : "text-white")}>
                Galeri
              </NavLink>
            </li>
            <li>
              <NavLink to={"/tentang-kami"} className={({ isActive }) => (isActive ? "text-red-500" : "text-white")}>
                Tentang Kami
              </NavLink>
            </li>
            <li>
              <NavLink to={"/kontak"} className={({ isActive }) => (isActive ? "text-red-500" : "text-white")}>
                Kontak
              </NavLink>
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
            <NavLink className="text-red-500" to={"/"}>
              Beranda
            </NavLink>
          </li>
          <li>
            <NavLink to={"/layanan-perbaikan"} className={({ isActive }) => (isActive ? "text-red-500" : "text-white")}>
              Layanan Perbaikan
            </NavLink>
          </li>
          <li>
            <NavLink to={"/galeri"} className={({ isActive }) => (isActive ? "text-red-500" : "text-white")}>
              Galeri
            </NavLink>
          </li>
          <li>
            <NavLink to={"/tentang-kami"} className={({ isActive }) => (isActive ? "text-red-500" : "text-white")}>
              Tentang Kami
            </NavLink>
          </li>
          <li>
            <NavLink to={"/kontak"} className={({ isActive }) => (isActive ? "text-red-500" : "text-white")}>
              Kontak
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
