import { Link } from "react-router-dom";

type Topbar = {
  className?: string;
};
export default function TopBar(props: Topbar) {
  return (
    <div>
      <div className={`navbar justify-between bg-transparent ${props.className}`}>
        <div className="flex container mx-auto">
          <a className="btn btn-ghost text-3xl relative">
            <span className="text-purple-200">Inertia</span>
            <span className="text-pink-600">Cell</span>
            <i className="bi bi-tools text-lg animate-pulse text-red-500 absolute top-0 -right-1"></i>
          </a>
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
          <button className="block md:hidden text-white text-4xl bi bi-list"></button>
        </div>
      </div>
    </div>
  );
}
