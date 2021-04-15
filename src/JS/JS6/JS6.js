import React, { useState, useEffect } from 'react';
import * as axios from 'axios';
import s from './JS6.module.css';
import { TextField } from '@material-ui/core';

export const JS6 = () => {
  const [cities, setCities] = useState([]);
  const [inputValue, setInputValue] = useState('');
  useEffect(() => {
    axios
      .get(
        'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json'
      )
      .then(res => {
        setCities(res.data);
      });
  }, []);
  const suggestions = document.querySelector('.suggestions');
  const findMatches = (wardToMatch, cities) => {
    return cities.filter(place => {
      const regex = new RegExp(wardToMatch, 'gi');
      return place.city.match(regex) || place.state.match(regex);
    });
  };
  const displayMatches = e => {
    setInputValue(e.currentTarget.value);
    const matchArray = findMatches(e.currentTarget.value, cities);
    const html = matchArray.map(place => {
      return `
      <li>
      <span className ='name'>${place.city}, ${place.state}</span>
      <span className ='population'>${place.population}</span>
      </li>   
      `;
    });
    suggestions.innerHTML = html;
  };

  return (
    <div className={s.js6container}>
      <TextField
        variant='outlined'
        type='text'
        placeholder='City or state'
        value={inputValue}
        onChange={displayMatches}
      />
      <ul className='suggestions'>
        <li>Filter for A City</li>

        <li>Or A State</li>
      </ul>
    </div>
  );
};
