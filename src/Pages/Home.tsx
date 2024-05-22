import React from "react";
import TopBar from "../Components/TopBar";

export default function Home() {
  return (
    <>
      <TopBar />
      <div className="container mx-auto">
        {/* Hero start */}
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              src="https://img.freepik.com/free-photo/repairman-s-workplace-with-cell-phone-special-tools-desk_343059-481.jpg?w=1380&t=st=1716388319~exp=1716388919~hmac=64d5ea02bf65749caa23a0d3ce70d5e8be9beb1484f333ed5611c952fe8e97ac"
              className="max-w-lg rounded-lg shadow-2xl"
            />
            <div>
              <h1 className="text-5xl text-indigo-600 font-bold max-w-md">HPmu Bermasalah? Perbaiki Disini Aja</h1>
              <p className="py-6">Kami berpengalaman dalam memperbaiki segala kerusakan handphone dari yang termudah sampai tersulit. Cobalah layanan kami.</p>
              <button className="btn btn-primary text-center md:text-start">
                <i className="bi bi-whatsapp"></i> Konsultasi Sekarang
              </button>
            </div>
          </div>
          {/* Hero end */}
        </div>
      </div>
      <div className="container mx-auto">
        <h2 className="text-center text-4xl font-bold text-indigo-600 ">Mengapa Harus Kami</h2>
        <div className="flex justify-evenly my-5">
          <div className="card w-96 bg-success text-primary-content">
            <div className="card-body">
              <h2 className="card-title">Cepat</h2>
              <p>Kami sudah berpengalaman selama bertahun-tahun untuk menganalisa segala permasalahan</p>
            </div>
          </div>

          <div className="card w-96 bg-primary text-primary-content">
            <div className="card-body">
              <h2 className="card-title">Bergaransi</h2>
              <p>Kami memberikan garansi ke pelanggan kami tergantung apa permasalahannya</p>
            </div>
          </div>

          <div className="card w-96 bg-info text-primary-content">
            <div className="card-body">
              <h2 className="card-title">Pelayanan Terbaik</h2>
              <p>Kami memiliki tim dengan melayani sepenuh hati</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
