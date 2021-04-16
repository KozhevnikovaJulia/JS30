import React, { useRef } from 'react';
import s from './JS8.module.css';
import { Paper } from '@material-ui/core';

export const JS8 = () => {
  const checkbox = useRef();
  const checkboxes = useRef();
  const handlechack = e => {
    if (e.shiftKey && checkbox.chacked) console.log(e);
  };
  return (
    <div className={s.js8container}>
      <Paper elevation={3} ref={checkboxes}>
        <div className={s.checkboxWrapper}>
          <input ref={checkbox} type='checkbox' onClick={handlechack} />
          <p>Lorem ipsum dolor sit.</p>
        </div>
        <div className={s.item}>
          <input ref={checkbox} type='checkbox' onClick={handlechack} />
          <p>Sit ipsum consectetur illo.</p>
        </div>
        <div className={s.item}>
          <input ref={checkbox} type='checkbox' onClick={handlechack} />
          <p>Quasi eveniet exercitationem.</p>
        </div>
        <div className={s.item}>
          <input ref={checkbox} type='checkbox' onClick={handlechack} />
          <p>Dolor sit amet consectetur.</p>
        </div>
        <div className={s.item}>
          <input ref={checkbox} type='checkbox' onClick={handlechack} />
          <p>Veniam dolorum sunt!</p>
        </div>
        <div className={s.item}>
          <input ref={checkbox} type='checkbox' onClick={handlechack} />
          <p>Lorem ipsum dolor sit.</p>
        </div>
        <div className={s.item}>
          <input ref={checkbox} type='checkbox' onClick={handlechack} />
          <p>Sit ipsum consectetur illo blanditiis a officia.</p>
        </div>
        <div className={s.item}>
          <input ref={checkbox} type='checkbox' onClick={handlechack} />
          <p>Quasi eveniet exercitationem tempora.</p>
        </div>
        <div className={s.item}>
          <input ref={checkbox} type='checkbox' onClick={handlechack} />
          <p>Dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className={s.item}>
          <input ref={checkbox} type='checkbox' onClick={handlechack} />
          <p>Veniam dolorum nobis sunt!</p>
        </div>
      </Paper>
    </div>
  );
};
