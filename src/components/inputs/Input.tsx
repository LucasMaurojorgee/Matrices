import "./styles.css";

type inputProps = {
  func: (value: number) => void | null;
};

const Input = ({func}: inputProps) => {
  return (
    <>
      <input
        type="number"
        placeholder="0"
        onChange={(e) => {
          func(Number(e.target.value));
        }}
      />
    </>
  );
};

export default Input;
