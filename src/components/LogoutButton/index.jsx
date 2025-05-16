import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
    console.log("Logout button loaded");
  };

  return (
    <div className="flex justify-end pr-20">
      <button
        className="flex items-center justify-center w-24 gap-2 px-4 py-2 mt-10 font-medium text-center text-black transition duration-300 ease-in-out transform bg-blue-400 border-2 rounded-lg font-poppins hover:bg-stone-500 hover:scale-105"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default LogoutButton;
