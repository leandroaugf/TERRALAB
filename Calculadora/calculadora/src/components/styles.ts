// Botões com CSS embutido
import styled from "styled-components"

export const Container = styled.div`
  background: #0b1120;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const CalculatorBox = styled.div`
  background: #111827;
  padding: 30px;
  border-radius: 10px;
`

export const Display = styled.input`
  width: 100%;
  height: 50px;
  margin-bottom: 20px;
  font-size: 24px;
  text-align: right;
  padding: 10px;
  border-radius: 6px;
  border: none;
  background: #1f2937;
  color: white;
`

export const Buttons = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 60px);
  gap: 10px;
`

export const StyledButton = styled.button`
  height: 50px;
  font-size: 18px;
  background: #1f2937;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background: #374151;
  }
`