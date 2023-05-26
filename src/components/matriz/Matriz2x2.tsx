import {useState} from "react";
import Header from "../header/Header";
import Input from "../inputs/Input";

const Matriz2x2 = () => {
  const [result, setResult] = useState<number>(0);

  const [one, setOne] = useState<number>(0);
  const [two, setTwo] = useState<number>(0);
  const [three, setThree] = useState<number>(0);
  const [four, setFour] = useState<number>(0);

  const cuenta = one * three - two * four;

  return (
    <>
      <Header />
      <div className="container">
        <div className="matriz">
          <div>
            <div>
              <Input func={setOne} />
              <Input func={setTwo} />
            </div>

            <div>
              <Input func={setThree} />
              <Input func={setFour} />
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

export default Matriz2x2;
