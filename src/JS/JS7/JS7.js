import React from 'react';
import s from './JS7.module.css';

export const JS7 = () => {
  const people = [
    { name: 'Marat', year: 1988 },
    { name: 'Irind', year: 1962 },
    { name: 'Max', year: 2015 },
    { name: 'Lola', year: 1940 },
  ];
  const comments = [
    { text: 'Hello', id: 12345 },
    { text: 'How are you?', id: 12346 },
    { text: 'What are you doing?', id: 13434346 },
    { text: 'Hello world', id: 1112346 },
    { text: 'We are happy', id: 1222346 },
    { text: 'Show must go on', id: 1230946 },
  ];

  const isAdult = people.some(person => person.year < 2002);
  const allAdult = people.every(person => person.year < 2002);
  const comment = comments.find(comment => comment.id === 12345);
  const index = comments.findIndex(comment => comment.id === 12345);
  //Удаляет 1 элемент по индексу 3. В remove удаленный элемент массива сидит
  const remove = comments.splice(3, 1);
  console.log(remove);
  return <div className={s.container}></div>;
};
