import React, { useState, useEffect } from 'react';
import './JS5.css';

export const JS5 = () => {
  const [isOpenPanel1, setIsOpenPanel1] = useState(false);
  const [isOpenPanel2, setIsOpenPanel2] = useState(false);
  const [isOpenPanel3, setIsOpenPanel3] = useState(false);
  const [isOpenPanel4, setIsOpenPanel4] = useState(false);
  const [isOpenPanel5, setIsOpenPanel5] = useState(false);
  const toggleOpen = (isOpen, setIsOpen) => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    // const toggleActive = (e) => {
    //   if (e.propertyName.includes('flex')) {
    //     panel.classList.toggle('open-active');
    //   }
    // };
    const panels = document.querySelectorAll('.panel');
    panels.forEach(panel =>
      panel.addEventListener('transitionend', e => {
        if (e.propertyName.includes('flex')) {
          panel.classList.toggle('open-active');
        }
      })
    );
  }, []);

  return (
    <div className='js5container'>
      <div className='panels'>
        <div
          className={isOpenPanel1 ? 'panel panel1 open' : 'panel panel1'}
          onClick={() => {
            toggleOpen(isOpenPanel1, setIsOpenPanel1);
          }}
        >
          <p>Hey</p>
          <p>lat's</p>
          <p>dance</p>
        </div>
        <div
          className={isOpenPanel2 ? 'panel panel2 open' : 'panel panel2'}
          onClick={() => {
            toggleOpen(isOpenPanel2, setIsOpenPanel2);
          }}
        >
          <p>Give</p>
          <p>take</p>
          <p>receive</p>
        </div>
        <div
          className={isOpenPanel3 ? 'panel panel3 open' : 'panel panel3'}
          onClick={() => {
            toggleOpen(isOpenPanel3, setIsOpenPanel3);
          }}
        >
          <p>Experience</p>
          <p>it</p>
          <p>today</p>
        </div>
        <div
          className={isOpenPanel4 ? 'panel panel4 open' : 'panel panel4'}
          onClick={() => {
            toggleOpen(isOpenPanel4, setIsOpenPanel4);
          }}
        >
          <p>Give</p>
          <p>all</p>
          <p>you can</p>
        </div>
        <div
          className={isOpenPanel5 ? 'panel panel5 open' : 'panel panel5'}
          onClick={() => {
            toggleOpen(isOpenPanel5, setIsOpenPanel5);
          }}
        >
          <p>Life</p>
          <p>in</p>
          <p>motion</p>
        </div>
      </div>
    </div>
  );
};
