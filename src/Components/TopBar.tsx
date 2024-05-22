import React from "react";

export default function TopBar() {
  return (
    <div>
      <div className="navbar justify-between bg-indigo-600">
        <div className="flex container mx-auto">
          <a className="btn btn-ghost text-3xl relative">
            <span className="text-purple-200">Inertia</span>
            <span className="text-pink-600">Cell</span>
            <i className="bi bi-gear text-lg animate-pulse text-red-500 absolute top-0 -right-1"></i>
          </a>
          <ul className="ms-20 flex gap-5">
            <li>
              <a className="text-white" href="">
                Beranda
              </a>
            </li>
            <li>
              <a className="text-white" href="">
                Layanan Perbaikan
              </a>
            </li>
            <li>
              <a className="text-white" href="">
                Tentang Kami
              </a>
            </li>
            <li>
              <a className="text-white" href="">
                Kontak
              </a>
            </li>
          </ul>
        </div>
        <div>
          <button className="block text-white text-4xl bi bi-list"></button>
        </div>
      </div>
    </div>
  );
}
