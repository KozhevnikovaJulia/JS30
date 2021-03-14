import React, { useEffect } from 'react'
import './JS2.css'

export const JS2 = () => {

    useEffect(() => {
      const secondHand = document.querySelector('.secondHand')
      const minHand = document.querySelector('.minHand')
      const hourHand = document.querySelector('.hourHand')
      const setDate = () => {
        const now = new Date();
        const seconds = now.getSeconds();
        const secondDegrees = ((seconds/60)*360)+90;
        secondHand.style.transform = `rotate(${secondDegrees}deg)`

        const mins = now.getMinutes();
        const minDegrees = ((mins/60)*360)+90;
        minHand.style.transform = `rotate(${minDegrees}deg)`

        const hours = now.getHours();
        const hourDegrees = ((hours/60)*360)+90;
        hourHand.style.transform = `rotate(${hourDegrees}deg)`

      }
      const SetIntervalID = setInterval(()=>{setDate()}, 1000);
      return ()=>{
        clearInterval(SetIntervalID)
      }   
  }, [])
  return (
    <div className='js2Container'>
      <div className='clock'>
        <div className='clockFace'>
          <div className={'hand' + ' ' + 'hourHand'}></div>
          <div className={'hand' + ' ' + 'minHand'}></div>
          <div className={'hand' + ' ' + 'secondHand'}></div>
        </div>
      </div>
    </div>
  )
}
