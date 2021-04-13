import React from 'react';
import s from './JS4.module.css';

export const JS4 = () => {
  const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johanne', last: 'Keppler', year: 1571, passed: 1630 },
    { first: 'Nicolous', last: 'Corpenicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  ];
  const people = [
    'Robert, Adam',
    'Kyle, Jason',
    'Nicholas, Jason',
    'Owen, Jeremiah',
    'Cole, Landon',
    'Brandon, Sebastian',
    'Jackson, Ethan',
    'Luis, Connor',
    'Jason, Nathaniel',
    'Jonathan, Andrew',
    'Antonio, Ryan',
    'Blake, Colin',
    'Jaden, Aiden',
    'Bryan, Evan',
    'Brandon, Jeremiah',
    'Jordan, Jose',
    'Gavin, Sean',
    'Sean, Nicholas',
    'Alex, Timothy',
    'Thomas, Cameron',
  ];
  //filter
  const peopleWasBorn1500 = inventors.filter(
    inventor => inventor.year >= 1500 && inventor.year <= 1599
  );
  //sort
  const old = inventors.sort((a, b) => {
    if (a.year > b.year) {
      return 1;
    } else {
      return -1;
    }
  });
  const young2 = inventors.sort((a, b) => {
    if (a.year < b.year) {
      return 1;
    } else {
      return -1;
    }
  });
  const young = inventors.sort((a, b) => (a.year < b.year ? 1 : -1));

  const oldest = inventors.sort(
    (a, b) => {
      a.age = a.passed - a.year;
      b.age = b.passed - b.year;
      if (a.age > b.age) {
        return -1;
      } else {
        return 1;
      }
    }
    // a.passed - a.year < a.passed - a.year ? -1 : 1
  );
  console.log(oldest);
  //reducer
  const reducer = (accumulator, inventor) => {
    return accumulator + (inventor.passed - inventor.year);
  };
  const allYears2 = inventors.reduce(reducer, 0);
  const allYears = inventors.reduce((accumulator, inventor) => {
    return accumulator + (inventor.passed - inventor.year);
  }, 0);

  return (
    <div className={s.js4container}>
      <ul>
        {inventors.map((inventor, i) => (
          <li key={i}>
            {inventor.first} {inventor.last}
          </li>
        ))}
      </ul>
    </div>
  );
};
