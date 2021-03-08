import React from 'react'
import style from './Menu.module.css'
import { NavLink } from 'react-router-dom'


export const Menu = React.memo(() => {
  return (
    <nav className={style.menu}>
      <div className={style.item}>
        <NavLink to="/js1" activeClassName={style.active}>JS1</NavLink>
      </div>
      <div className={style.item}>
        <NavLink to="/js2" activeClassName={style.active}>JS2</NavLink>
      </div>
      <div className={style.item}>
        <NavLink to="/js3" activeClassName={style.active}>JS3</NavLink>
      </div>
      <div className={style.item}>
        <NavLink to="/js4" activeClassName={style.active}>JS4</NavLink>
      </div>
      <div className={style.item}>
        <NavLink to="/js5" activeClassName={style.active}>JS5</NavLink>
      </div>
      <div className={style.item}>
        <NavLink to="/js6" activeClassName={style.active}>JS6</NavLink>
      </div>
     
    </nav>
  )
}
)