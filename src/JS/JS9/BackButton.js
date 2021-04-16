import React, { useContext } from 'react';
import s from './Calculator.module.css';
import { NumberContext } from './NumberProvider';

export const BackButton = () => {
  const { handleBackButton } = useContext(NumberContext);
  return (
    <button
      type='button'
      className={s.whiteButton}
      onClick={() => handleBackButton()}
    >
      back
    </button>
  );
};
