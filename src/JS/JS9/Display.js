import React, { useContext } from 'react';
import s from './Calculator.module.css';
import { NumberContext } from './NumberProvider';

export const Display = () => {
  const { number, storedNumber, functionType } = useContext(NumberContext);
  return (
    <div className={s.displayNumber}>
      <h2>{!number.length && !storedNumber ? '0' : number || storedNumber}</h2>
    </div>
  );
};
