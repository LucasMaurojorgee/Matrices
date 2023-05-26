import {useState} from "react";
import Input from "../inputs/Input";
import Header from "../header/Header";

const Matriz4x4 = () => {
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
  const [ten, setTen] = useState<number>(0);
  const [eleven, setEleven] = useState<number>(0);
  const [twelve, setTwelve] = useState<number>(0);
  const [thirteen, setThirteen] = useState<number>(0);
  const [fourteen, setFourteen] = useState<number>(0);
  const [fifteen, setFifteen] = useState<number>(0);
  const [sixteen, setSixteen] = useState<number>(0);

  const matriz1 =
    six * eleven * sixteen +
    ten * fifteen * eight +
    fourteen * seven * twelve -
    eight * eleven * fourteen -
    twelve * fifteen * six -
    sixteen * seven * ten;

  const matriz2 =
    five * eleven * sixteen +
    nine * fifteen * eight +
    thirteen * seven * twelve -
    eight * eleven * thirteen -
    twelve * fifteen * five -
    sixteen * seven * nine;

  const matriz3 =
    five * ten * sixteen +
    nine * fourteen * eight +
    thirteen * six * twelve -
    eight * ten * thirteen -
    twelve * fourteen * five -
    sixteen * six * nine;

  const matriz4 =
    five * ten * fifteen +
    nine * fourteen * seven +
    thirteen * six * eleven -
    seven * ten * thirteen -
    eleven * fourteen * five -
    fifteen * six * nine;

  const cuenta1 = matriz1 * one;
  const cuenta2 = matriz2 * -two;
  const cuenta3 = matriz3 * three;
  const cuenta4 = matriz4 * -four;

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
              <Input func={setFour} />
            </div>

            <div>
              <Input func={setFive} />
              <Input func={setSix} />
              <Input func={setSeven} />
              <Input func={setEight} />
            </div>

            <div>
              <Input func={setNine} />
              <Input func={setTen} />
              <Input func={setEleven} />
              <Input func={setTwelve} />
            </div>

            <div>
              <Input func={setThirteen} />
              <Input func={setFourteen} />
              <Input func={setFifteen} />
              <Input func={setSixteen} />
            </div>
          </div>

          <div className="res">= {result}</div>
        </div>

        <button
          onClick={() => {
            setResult(cuenta1 + cuenta2 + cuenta3 + cuenta4);
          }}
        >
          Calcular
        </button>
      </div>
    </>
  );
};

export default Matriz4x4;
