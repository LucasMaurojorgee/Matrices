import "./styles.css";
import {Link} from "react-router-dom";

const Home = () => {
  return (
    <div className="container">
      <Link to={"2x2"}>
        <button>2x2</button>
      </Link>

      <Link to={"3x3"}>
        <button>3x3</button>
      </Link>

      <Link to={"4x4"}>
        <button>4x4</button>
      </Link>
    </div>
  );
};

export default Home;
