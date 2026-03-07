// estado da calculadora - compartilha react entre os componentes

import React,
{
  createContext,
  useContext,
  useCallback,
  useState,
} from 'react';

interface InputContextData {
  display: string;
  addNumber(value: string): void;
  setOperator(op: string): void;
  calculate(): void;
  clear(): void;
}

const InputContext = createContext<InputContextData>(
  {} as InputContextData
);

export const InputProvider: React.FC<{children: React.ReactNode}> =
({ children }) => {

  const [firstNumber, setFirstNumber] = useState('');
  const [secondNumber, setSecondNumber] = useState('');
  const [operator, setOperatorState] = useState('');
  const [display, setDisplay] = useState('');

  const addNumber = useCallback((value: string) => {

    if (!operator) {
      const newValue = firstNumber + value;
      setFirstNumber(newValue);
      setDisplay(newValue);
    } else {
      const newValue = secondNumber + value;
      setSecondNumber(newValue);
      setDisplay(newValue);
    }

  }, [firstNumber, secondNumber, operator]);

  const setOperator = useCallback((op: string) => {
    setOperatorState(op);
  }, []);

  const calculate = useCallback(() => {

    const n1 = Number(firstNumber);
    const n2 = Number(secondNumber);

    let result = 0;

    switch (operator) {
      case '+': result = n1 + n2; break;
      case '-': result = n1 - n2; break;
      case '*': result = n1 * n2; break;
      case '/': result = n1 / n2; break;
    }

    setDisplay(String(result));
    setFirstNumber(String(result));
    setSecondNumber('');
    setOperatorState('');

  }, [firstNumber, secondNumber, operator]);

  const clear = useCallback(() => {
    setFirstNumber('');
    setSecondNumber('');
    setOperatorState('');
    setDisplay('');
  }, []);

  return (
    <InputContext.Provider
      value={{
        display,
        addNumber,
        setOperator,
        calculate,
        clear,
      }}
    >
      {children}
    </InputContext.Provider>
  );
};

export function useInput() {
  return useContext(InputContext);
}