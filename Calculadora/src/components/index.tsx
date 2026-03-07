// html x ts
import { useInput } from "../context/input";
import {
  Container,
  Display, 
  Button,
} from "./styles";

export default function Calculator() {

  const {
    display,
    addNumber,
    setOperator,
    calculate,
    clear
  } = useInput();

  const numbers = [
    "7","8","9",
    "4","5","6",
    "1","2","3",
    "0"
  ];

  return (
    <Container>

      <Display>{display || 0}</Display>

      <ButtonsGrid>

        <Button onClick={clear}>C</Button>
        <Button onClick={() => setOperator("/")}>/</Button>
        <Button onClick={() => setOperator("*")}>*</Button>
        <Button onClick={() => setOperator("-")}>-</Button>

        {numbers.map((n) => (
          <Button key={n} onClick={() => addNumber(n)}>
            {n}
          </Button>
        ))}

        <Button onClick={() => setOperator("+")}>+</Button>
        <Button onClick={calculate}>=</Button>

      </ButtonsGrid>

    </Container>
  );
}