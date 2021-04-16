import React, { useContext } from 'react';
import s from './Calculator.module.css';
import { NumberContext } from './NumberProvider';

export const ClearButton = () => {
  const { handleClearValue } = useContext(NumberContext);
  return (
    <button
      type='button'
      className={s.whiteButton}
      onClick={() => handleClearValue()}
    >
      C
    </button>
  );
};
