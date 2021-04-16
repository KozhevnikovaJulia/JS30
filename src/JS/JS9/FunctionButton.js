import React, { useContext } from 'react';
import s from './Calculator.module.css';
import { NumberContext } from './NumberProvider';

export const FunctionButton = ({ buttonValue }) => {
  const { handleSetCalcFunction } = useContext(NumberContext);
  return (
    <button
      type='button'
      className={s.functionButton}
      onClick={() => handleSetCalcFunction(buttonValue)}
    >
      {buttonValue}
    </button>
  );
};
