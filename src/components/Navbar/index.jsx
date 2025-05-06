import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex gap-5">
      <Link to={"/"}>Home</Link>
      <Link to={"/detail"}>Detail</Link>
      <Link to={"/login"}>Login</Link>
      <Link to={"/register"}>Register</Link>
    </div>
  );
};

export default Navbar;
