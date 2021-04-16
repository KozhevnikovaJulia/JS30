import React, { useContext } from 'react';
import s from './Calculator.module.css';
import { NumberContext } from './NumberProvider';

export const EqualButton = () => {
  const { doMath } = useContext(NumberContext);
  return (
    <button type='button' className={s.whiteButton} onClick={() => doMath()}>
      =
    </button>
  );
};
