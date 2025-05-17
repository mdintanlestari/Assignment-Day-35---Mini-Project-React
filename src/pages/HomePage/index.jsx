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
            Welcome to the Reqres User Portal Demo App, a React-based
            application integrated with the public API from Reqres.in. This app
            simulates a user authentication and management system with a
            complete set of secure and responsive features.
          </p>
          <h3 className="text-lg font-medium">Key Fitur:</h3>
          <ul className="-pt-5">
            <FontAwesomeIcon icon={faCheckSquare} className="text-green-500" />{" "}
            <span>User Registration and Login</span>
            <br />
            <FontAwesomeIcon
              icon={faCheckSquare}
              className="text-green-500"
            />{" "}
            <span>Displaying User List</span>
            <br />
            <FontAwesomeIcon
              icon={faCheckSquare}
              className="text-green-500"
            />{" "}
            <span>Viewing Individual User Details</span>
            <br />
            <FontAwesomeIcon
              icon={faCheckSquare}
              className="text-green-500"
            />{" "}
            <span>Pagination for Easy Navigation</span>
            <br />
            <FontAwesomeIcon
              icon={faCheckSquare}
              className="text-green-500"
            />{" "}
            <span>Page Protection with Protected Routes</span>
            <br />
            <FontAwesomeIcon
              icon={faCheckSquare}
              className="text-green-500"
            />{" "}
            <span>Responsive Design for All Devices</span>
          </ul>
        </div>
        <div className="text-justify -mt-14 md:space-y-6">
          <p className="mt-5 text-justify">
            This application was developed as part of a Front-End Developer
            portfolio mini project using React.js and Tailwind CSS.
          </p>
          <p className="mt-5 text-left">
            Please{" "}
            <button
              className="w-24 h-8 font-semibold bg-black rounded-md hover:bg-white hover:text-black"
              onClick={handleKlikRegister}
            >
              Register
            </button>{" "}
            or{" "}
            <button
              className="w-20 h-8 font-semibold bg-black rounded-md hover:bg-white hover:text-black"
              onClick={handleKlikLogin}
            >
              {" "}
              login
            </button>{" "}
            <span> to explore the available features.</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
