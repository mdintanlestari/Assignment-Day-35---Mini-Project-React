import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import image from "../../assets/img/register/image1.jpg";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const isButtonValid = username.trim() !== "" && password.trim() !== "";

  const Navigate = useNavigate();

  const handleChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const payload = {
      email: username,
      password: password,
    };
    try {
      const response = await axios.post(
        "https://reqres.in/api/login",
        payload,
        {
          headers: {
            "x-api-key": "reqres-free-v1",
          },
        }
      );
      console.log(response);
      setSuccess("Login Success!!");
      console.log(response.data.token);
      localStorage.setItem("token", response.data.token);

      setTimeout(() => {
        Navigate("/listuser");
      }, 2000);
    } catch (error) {
      console.log(error.response);
      setError(error.response.data.error);
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen px-4 bg-gradient-to-b from-gray-900 to-indigo-950 font-poppins">
      <div className="grid w-full max-w-6xl overflow-hidden bg-white rounded-md shadow-lg md:grid-cols-2">
        <div className="relative flex items-center justify-center bg-black">
          <img
            src={image}
            alt="Login"
            className="w-full h-full object-cover md:max-h-[500px]"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-white bg-black bg-opacity-50">
            <h1 className="mb-2 text-4xl font-bold">Welcome Back!</h1>
            <p className="text-lg">
              Login to access all features of this React portfolio app.
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center px-6 py-10 md:px-10">
          <h2 className="mb-6 text-3xl font-medium text-center text-black">
            Login
          </h2>

          {success && (
            <p className="mb-2 text-lg font-semibold text-green-700">
              {success}
            </p>
          )}
          {error && !success.length && (
            <p className="mb-2 text-lg font-semibold text-red-600">{error}</p>
          )}

          <label htmlFor="username" className="block mb-2 text-black">
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

          <label htmlFor="password" className="block mb-2 text-black">
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
            onClick={handleLogin}
            disabled={!isButtonValid}
            className="w-full py-3 font-bold text-white transition duration-300 rounded-md bg-gradient-to-br from-blue-900 via-gray-800 to-black hover:bg-slate-100 hover:text-black"
          >
            Login
          </button>

          <p className="mt-6 text-lg text-center text-black">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="font-medium text-blue-600 hover:underline hover:text-blue-900"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
export default LoginPage;
