import {Link} from "react-router-dom";
import "./styles.css";

const Header = () => {
  return (
    <header>
      <h1>DeterCalc</h1>
      <Link to={"/"}>
        <button>to home</button>
      </Link>
    </header>
  );
};

export default Header;
