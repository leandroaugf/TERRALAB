import { useState } from "react"
import { Button } from "./Button"
import { Container, CalculatorBox, Display, Buttons } from "./styles"

export function Calculator() {

  const [display, setDisplay] = useState("")

  const addNumber = (num: string) => {
    setDisplay(display + num)
  }

  const clear = () => {
    setDisplay("")
  }

  const calculate = () => {
    try {
      setDisplay(eval(display))
    } catch {
      setDisplay("Erro")
    }
  }
  
  return (
    <Container>

      <CalculatorBox>

        <Display value={display} readOnly />

        <Buttons>
          
          <Button label="C" onClick={clear} /> 
          <Button label="CC" onClick={clear} />
          <Button label="*" onClick={() => addNumber("*")} />
          <Button label="/" onClick={() => addNumber("/")} />


          <Button label="7" onClick={() => addNumber("7")} />
          <Button label="8" onClick={() => addNumber("8")} />
          <Button label="9" onClick={() => addNumber("9")} />
          <Button label="-" onClick={() => addNumber("-")} />


          <Button label="4" onClick={() => addNumber("4")} />
          <Button label="5" onClick={() => addNumber("5")} />
          <Button label="6" onClick={() => addNumber("6")} />
          <Button label="+" onClick={() => addNumber("+")} />


          <Button label="1" onClick={() => addNumber("1")} />
          <Button label="2" onClick={() => addNumber("2")} />
          <Button label="3" onClick={() => addNumber("3")} />
          <Button label="=" onClick={calculate} />


          <Button label="0" onClick={() => addNumber("0")} />
          <Button label="." onClick={() => addNumber(".")} />

        </Buttons>

      </CalculatorBox>

    </Container>
  )
}