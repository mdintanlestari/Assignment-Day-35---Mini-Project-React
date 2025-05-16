import { Link } from "react-router-dom";
import LogoutButton from "../LogoutButton";

const Navbar = () => {
  return (
    <div className="flex gap-5">
      <LogoutButton />
    </div>
  );
};

export default Navbar;
