import {useState} from "react";
import Header from "../header/Header";
import Input from "../inputs/Input";
import "./styles.css";

const Matriz = () => {
  const [result, setResult] = useState<number>(0);

  const [one, setOne] = useState<number>(0);
  const [two, setTwo] = useState<number>(0);
  const [three, setThree] = useState<number>(0);
  const [four, setFour] = useState<number>(0);
  const [five, setFive] = useState<number>(0);
  const [six, setSix] = useState<number>(0);
  const [seven, setSeven] = useState<number>(0);
  const [eight, setEight] = useState<number>(0);
  const [nine, setNine] = useState<number>(0);

  const cuenta =
    one * five * nine +
    four * eight * three +
    seven * two * six -
    three * five * seven -
    six * eight * one -
    nine * two * four;

  return (
    <>
      <Header />
      <div className="container">
        <div className="matriz">
          <div>
            <div>
              <Input func={setOne} />
              <Input func={setTwo} />
              <Input func={setThree} />
            </div>
            <div>
              <Input func={setFour} />
              <Input func={setFive} />
              <Input func={setSix} />
            </div>
            <div>
              <Input func={setSeven} />
              <Input func={setEight} />
              <Input func={setNine} />
            </div>
          </div>

          <div className="res">= {result}</div>
        </div>

        <button
          onClick={() => {
            setResult(cuenta);
          }}
        >
          Calcular
        </button>
      </div>
    </>
  );
};

export default Matriz;
