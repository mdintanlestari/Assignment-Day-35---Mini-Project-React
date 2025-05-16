import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import image from "../../assets/img/register/image1.jpg";

function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const isButtonValid = username.trim() !== "" && password.trim() !== "";

  const navigate = useNavigate();

  const handleChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const payload = {
      email: username,
      password: password,
    };
    try {
      const response = await axios.post(
        "https://reqres.in/api/register",
        payload,
        {
          headers: {
            "x-api-key": "reqres-free-v1",
          },
        }
      );
      setSuccess("Register Success!!");
      localStorage.setItem("token", response.data.token);

      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      setError(error.response.data.error);
    }
  };

  return (
    <div className="flex items-center justify-center w-screen bg-cover font-poppins bg-gradient-to-b from-gray-900 to-indigo-950">
      <div className="grid items-center w-full grid-cols-1 md:grid-cols-2">
        {/* Kiri: Gambar + Welcome */}
        <div className="flex items-center justify-center w-screen min-h-screen md:pl-5 font-poppins bg-gradient-to-b from-gray-900 to-indigo-950">
          <div className="grid w-full max-w-6xl grid-cols-1 overflow-hidden bg-white rounded-md shadow-lg md:grid-cols-2">
            {/* Kiri: Gambar + Welcome */}
            <div className="relative flex items-center justify-center bg-black">
              <img
                src={image}
                alt="Register"
                className="w-full h-full object-cover md:max-h-[450px]"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-white bg-black bg-opacity-50">
                <h1 className="mb-2 text-4xl font-bold">Welcome</h1>
                <p className="text-lg">
                  Create an account to access all features of this React
                  portfolio app.
                </p>
              </div>
            </div>

            {/* Kanan: Form Register */}
            <div className="flex flex-col justify-center px-10 py-[35px]">
              <h2 className="mb-6 text-3xl font-medium text-center text-black">
                Register
              </h2>

              {success && (
                <p className="text-xl font-semibold text-green-700">
                  {success}
                </p>
              )}
              {error && !success.length && (
                <p className="text-xl font-semibold text-red-600">{error}</p>
              )}

              <label className="block mb-2 text-black" htmlFor="username">
                Email:
              </label>
              <input
                value={username}
                onChange={handleChangeUsername}
                className="w-full px-3 py-2 mb-4 text-black border border-black rounded"
                type="text"
                name="username"
                placeholder="email"
              />

              <label className="block mb-2 text-black" htmlFor="password">
                Password:
              </label>
              <input
                value={password}
                onChange={handleChangePassword}
                className="w-full px-3 py-2 mb-6 text-black border border-black rounded"
                type="password"
                name="password"
                placeholder="password"
              />

              <button
                onClick={handleRegister}
                disabled={!isButtonValid}
                className="w-full py-3 font-bold text-white transition-colors duration-300 rounded-md bg-gradient-to-br from-blue-900 via-gray-800 to-black hover:bg-slate-100 hover:text-black"
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
