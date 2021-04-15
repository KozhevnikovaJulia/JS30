import React from 'react';
import style from './Header.module.css';
import { Link } from 'react-router-dom';

export const Header = React.memo(props => {
  return (
    <div className={style.header}>
      <Link to={'#'} onClick={props.toggleMenuMode}>
        <div className={style.toggleHolder}>
          <div id={style.toggle}>
            <div className={style.menuLine}></div>
          </div>
        </div>
      </Link>
    </div>
  );
});
