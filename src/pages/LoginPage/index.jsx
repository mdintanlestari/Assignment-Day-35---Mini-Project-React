import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const Navigate = useNavigate();

  const handleChageUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e) => {
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
      localStorage.setItem("token", response.data.token);
    } catch (error) {
      console.log(error.response);
      setError(error.response.data.error);
    }
  };

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-gray-200">
      <div className="w-full h-full px-10 text-white bg-blue-300 rounded shadow-md md:max-w-md lg:w-1/3 md:h-[450px]">
        <h2 className="mt-10 mb-4 text-3xl font-medium text-center">Login</h2>
        {success && (
          <p className="text-xl font-semibold text-green-700">{success}</p>
        )}
        {error && !success.length && (
          <p className="text-xl font-semibold text-red-600">{error}</p>
        )}
        <label className="block mb-3" htmlFor="username">
          Email:
        </label>
        <input
          className="w-full px-3 py-3 text-black border-solid-1"
          onChange={handleChageUsername}
          type="text"
          name="text"
          placeholder="username"
        />
        <label className="block mt-3 mb-3" htmlFor="password">
          Password:
        </label>
        <input
          className="block w-full px-3 py-3 text-black border-solid-1 mb-7"
          onChange={handleChangePassword}
          type="password"
          name="password"
          placeholder="password"
        />
        <button
          onClick={handleLogin}
          className="py-3 font-bold text-center text-blue-300 bg-white rounded px-7 hover:bg-blue-700"
        >
          Login
        </button>
        <p className="mt-6 text-lg">
          Don't have account?
          <a
            className="font-medium text-blue-600 hover:underline hover:text-blue-900"
            href=""
          >
            Register
          </a>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
