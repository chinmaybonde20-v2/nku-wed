import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <Link to="/">Home------ </Link>
      <Link to="/about">About Us------ </Link>
      <Link to="/contact">Contact Us</Link>
      <hr />
    </div>
  );
};
