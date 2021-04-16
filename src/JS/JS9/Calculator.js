import React from 'react';
import s from './Calculator.module.css';
import { NumberButton } from './NumberButton';
import { FunctionButton } from './FunctionButton';
import { ClearButton } from './ClearButton';
import { Display } from './Display';
import { EqualButton } from './EqualButton';
import { BackButton } from './BackButton';
import { NegativeButton } from './NegativeButton';

export const Calculator = () => {
  return (
    <div className={s.calculator}>
      <div className={s.display}>
        <Display />
      </div>
      <div className={s.numberPad}>
        <ClearButton />
        <BackButton />
        <NegativeButton />
        <FunctionButton buttonValue='/' />
        <NumberButton buttonValue={7} />
        <NumberButton buttonValue={8} />
        <NumberButton buttonValue={9} />
        <FunctionButton buttonValue='*' />
        <NumberButton buttonValue={4} />
        <NumberButton buttonValue={5} />
        <NumberButton buttonValue={6} />
        <FunctionButton buttonValue='-' />
        <NumberButton buttonValue={1} />
        <NumberButton buttonValue={2} />
        <NumberButton buttonValue={3} />
        <FunctionButton buttonValue='+' />
        <div className={s.zeroButton}>
          <NumberButton buttonValue={0} />
        </div>
        <NumberButton buttonValue='.' />
        <EqualButton />
      </div>
    </div>
  );
};
