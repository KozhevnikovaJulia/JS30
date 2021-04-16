import React from 'react';
import { Calculator } from './Calculator';
import { NumberProvider } from './NumberProvider';
import s from './Calculator.module.css';

export const JS9 = () => {
  return (
    <div className={s.js9Container}>
      <NumberProvider>
        <Calculator />
      </NumberProvider>
    </div>
  );
};
