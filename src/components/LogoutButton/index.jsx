import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
    console.log("Logout button loaded");
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;
