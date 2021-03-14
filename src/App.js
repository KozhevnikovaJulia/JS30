import React, { useState } from 'react'
import './App.css'
import { JS1 } from './JS/JS1'
import { JS2 } from './JS/JS2'
import { JS3 } from './JS/JS3'
import { JS4 } from './JS/JS4'
import { JS5 } from './JS/JS5'
import { JS6 } from './JS/JS6'
import { Menu } from './Menu/Menu'
import { Header } from './Header/Header'
import { Switch, Route, Redirect } from 'react-router-dom'
import ScrollToTop from './JS/ScrollToTop'
import img from './icon-arrow-up.svg'

function App() {
  const [menuMode, setMenuMode] = useState(false)
  const toggleMenuMode = () => {
    setMenuMode(!menuMode)
  }
  return (
    <div className="App">
      <Header toggleMenuMode={toggleMenuMode} />
      {menuMode && <Menu />}

      <div>
        <Switch>
          <Route exact path="/" render={() => <Redirect to={'/JS1'} />} />
          <Route exact path='/js1' render={() => <JS1 />} />
          <Route exact path='/js2' render={() => <JS2 />} />
          <Route exact path='/js3' render={() => <JS3 />} />
          <Route exact path='/js4' render={() => <JS4 />} />
          <Route exact path='/js5' render={() => <JS5 />} />
          <Route exact path='/js6' render={() => <JS6 />} />
        </Switch>
        <ScrollToTop />
        <img src={img}></img>
      </div>
    </div>
  );
}

export default App;
