import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <nav>
      <ul className="flex flex-col items-center md:flex-row justify-center gap-3">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
