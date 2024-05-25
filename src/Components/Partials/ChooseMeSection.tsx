export default function ChooseMeSection() {
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-center text-4xl font-bold text-indigo-100 ">Mengapa Harus Kami</h2>
      <div className="flex flex-wrap lg:flex-row justify-center  gap-5 my-5">
        <div className="card w-96 bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 text-primary-content">
          <div className="card-body">
            <h2 className="card-title">
              <i className="bi bi-lightning text-yellow-500 animate-pulse"></i> Cepat
            </h2>
            <p>Kami sudah berpengalaman selama bertahun-tahun untuk menganalisa segala permasalahan</p>
          </div>
        </div>

        <div className="card w-96 bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 text-primary-content">
          <div className="card-body">
            <h2 className="card-title">
              <i className="bi bi-clock-history text-red-600 animate-pulse"></i> Bergaransi
            </h2>
            <p>Kami memberikan garansi ke pelanggan kami tergantung apa permasalahannya</p>
          </div>
        </div>

        <div className="card w-96 bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 text-primary-content">
          <div className="card-body">
            <h2 className="card-title">
              <i className="bi bi-people text-green-500"></i> Pelayanan Terbaik
            </h2>
            <p>Kami memiliki tim dengan melayani sepenuh hati</p>
          </div>
        </div>

        <div className="card w-96 bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 text-primary-content">
          <div className="card-body">
            <h2 className="card-title">
              <i className="bi bi-clipboard-data-fill text-green-500"></i> Kualitas
            </h2>
            <p>Kualitas pemilihan spartpart yang paling bagus</p>
          </div>
        </div>

        <div className="card w-96 bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 text-primary-content">
          <div className="card-body">
            <h2 className="card-title">
              <i className="bi bi-shop text-green-500"></i>Online Store
            </h2>
            <p>Kami mempunyai E-Commerce untuk menjual komponen yang tidak terpakai</p>
          </div>
        </div>
      </div>
    </div>
  );
}
