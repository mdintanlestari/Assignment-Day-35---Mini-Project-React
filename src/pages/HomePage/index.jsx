import { useNavigate } from "react-router-dom";
import background from "../../assets/img/homepage/background.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";

function HomePage() {
  const navigate = useNavigate();

  const handleKlikRegister = () => {
    navigate("/register");
  };

  const handleKlikLogin = () => {
    navigate("/login");
  };

  return (
    <div className="relative w-full h-full min-h-screen py-10 text-white bg-cover bg-gradient-to-r from-indigo-900 via-purple-900 to-gray-800">
      <div className="items-center justify-center hidden md:block">
        <img
          className="absolute shadow-2xl top-1/2 left-1/2 w-full max-w-7xl max-h-[500px] transform -translate-x-1/2 -translate-y-1/2 opacity-30 object-cover rounded-lg"
          src={background}
          alt="background"
        />
      </div>
      <div className="relative z-10 items-center justify-center mx-5 lg:grid-cols-3 md:mx-20 md:grid md:my-14 font-poppins ">
        <div>
          <h1 className="text-5xl font-bold leading-relaxed text-center md:tracking-wide md:mt-18 md:text-left">
            Welcome To Reqres User Portal
          </h1>
        </div>
        <div className="md:space-y-4 md:mr-16">
          <p className="text-justify md:pt-16">
            Selamat datang di aplikasi demo Reqres User Portal, sebuah aplikasi
            berbasis React yang terintegrasi dengan API publik dari Reqres.in.
            Aplikasi ini menampilkan simulasi sistem autentikasi dan manajemen
            pengguna dengan fitur-fitur lengkap yang responsif dan aman.
          </p>
          <h3 className="text-lg font-medium">Fitur Utama:</h3>
          <ul className="-pt-5">
            <FontAwesomeIcon icon={faCheckSquare} className="text-green-500" />{" "}
            <span>Registrasi dan Login pengguna</span>
            <br />
            <FontAwesomeIcon
              icon={faCheckSquare}
              className="text-green-500"
            />{" "}
            <span>Menampilkan daftar pengguna</span>
            <br />
            <FontAwesomeIcon
              icon={faCheckSquare}
              className="text-green-500"
            />{" "}
            <span>Melihat detail setiap pengguna</span>
            <br />
            <FontAwesomeIcon
              icon={faCheckSquare}
              className="text-green-500"
            />{" "}
            <span>Navigasi dengan Pagination</span>
            <br />
            <FontAwesomeIcon
              icon={faCheckSquare}
              className="text-green-500"
            />{" "}
            <span>Proteksi halaman dengan Protected Routes</span>
            <br />
            <FontAwesomeIcon
              icon={faCheckSquare}
              className="text-green-500"
            />{" "}
            <span>Desain responsif untuk semua perangkat</span>
          </ul>
        </div>
        <div className="text-justify md:space-y-6">
          <p className="mt-5 text-justify">
            Aplikasi ini dikembangkan sebagai bagian dari mini project
            portofolio Front-End Developer menggunakan React.js dan Tailwind
            CSS.
          </p>
          <p className="mt-5 text-left">
            Silahkan{" "}
            <button
              className="w-24 h-8 font-semibold bg-black rounded-md hover:bg-white hover:text-black"
              onClick={handleKlikRegister}
            >
              Register
            </button>{" "}
            atau{" "}
            <button
              className="w-20 h-8 font-semibold bg-black rounded-md hover:bg-white hover:text-black"
              onClick={handleKlikLogin}
            >
              {" "}
              login
            </button>{" "}
            <span> untuk menjelajahi fitur yang tersedia</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
