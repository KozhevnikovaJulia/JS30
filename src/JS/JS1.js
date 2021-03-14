import React, { useEffect, useState } from 'react'
import sound1 from '../Assets/sounds/u_edomlenie-9.mp3'
import sound2 from '../Assets/sounds/baraban-pistoleta-36119.mp3'
import sound3 from '../Assets/sounds/drugoy-zvuk-pohojiy-na-signal-6415.mp3'
import sound4 from '../Assets/sounds/porvalas-struna-6800.mp3'
import sound5 from '../Assets/sounds/variant-2-43569.mp3'
import sound6 from '../Assets/sounds/v-stile-djaz-6420.mp3'
import sound7 from '../Assets/sounds/zvuk-myisl-prishla-v-golovu-7314.mp3'
import sound8 from '../Assets/sounds/variant-4-7234.mp3'
import sound9 from '../Assets/sounds/zvuk-odinochnogo-udara-po-barabanu-6443.mp3'
import sound10 from '../Assets/sounds/vverh-vniz-7383.mp3'
import './JS1.css'

export const JS1 = () => { 
  const [classActive, setClassActive] = useState(false)
  const [dataKeyActive, setDataKeyActive] = useState("0")

 useEffect(() => {  
  const keys = document.querySelectorAll('.key')
  keys.forEach(key => key.addEventListener('transitionend', removeTransition))
  document.addEventListener('keydown', onKeyDownHandler)
  }, [])

const onKeyDownHandler = (e) => {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
  setDataKeyActive(`${e.keyCode}`)
    if (!audio)return
    audio.currentTime = 0
    audio.play()
    setClassActive(true)
 }
 const removeTransition = (e) => { 
   setClassActive(false)
   if(e.propertyName !=='transform')return     
 }
  return (
    <>
      <div className='js1Container'>
        <div className='keys'>
          <div data-key="65" className= {classActive &&  dataKeyActive==="65" ? 'key'+' '+'playing' : 'key'}>
            <p>A</p>
            <span className='sound'>click</span>
          </div>
          <div data-key="66" className= {classActive &&  dataKeyActive==="66" ? 'key'+' '+'playing' : 'key'}>
            <p>B</p>
            <span className= 'sound'>hip</span>
          </div>
          <div data-key="67" className= {classActive &&  dataKeyActive==="67" ? 'key'+' '+'playing' : 'key'} >
            <p>C</p>
            <span className= 'sound'>hop</span>
          </div>
          <div data-key="68" className= {classActive &&  dataKeyActive==="68" ? 'key'+' '+'playing' : 'key'} >
            <p>D</p>
            <span className= 'sound'>la-la</span>
          </div>
          <div data-key="69" className= {classActive &&  dataKeyActive==="69" ? 'key'+' '+'playing' : 'key'}>
            <p>E</p>
            <span className= 'sound'>lay</span>
          </div>
          <div data-key="70" className= {classActive &&  dataKeyActive==="70" ? 'key'+' '+'playing' : 'key'}>
            <p>F</p>
            <span className= 'sound'>hey</span>
          </div>
          <div data-key="71" className= {classActive &&  dataKeyActive==="71" ? 'key'+' '+'playing' : 'key'} >
            <p>G</p>
            <span className= 'sound'>you</span>
          </div>
          <div data-key="72" className= {classActive &&  dataKeyActive==="72" ? 'key'+' '+'playing' : 'key'} >
            <p>H</p>
            <span className= 'sound'>bum</span>
          </div>
          <div data-key="73" className= {classActive &&  dataKeyActive==="73" ? 'key'+' '+'playing' : 'key'} >
            <p>I</p>
            <span className= 'sound'>clap</span>
          </div>
          <div data-key="74" className= {classActive &&  dataKeyActive==="74" ? 'key'+' '+'playing' : 'key'} >
            <p>J</p>
            <span className= 'sound'>took</span>
          </div>
        </div>
      </div>

      <audio data-key="65" src={sound1}></audio>
      <audio data-key="66" src={sound2}></audio>
      <audio data-key="67" src={sound3}></audio>
      <audio data-key="67" src={sound4}></audio>
      <audio data-key="69" src={sound5}></audio>
      <audio data-key="70" src={sound6}></audio>
      <audio data-key="71" src={sound7}></audio>
      <audio data-key="72" src={sound8}></audio>
      <audio data-key="73" src={sound9}></audio>
      <audio data-key="74" src={sound10}></audio>
    </>
  )}