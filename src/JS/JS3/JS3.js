import React, { useEffect } from 'react'
import './JS3.css'

export const JS3 = () => {
  useEffect(() => {  
    const inputs = document.querySelectorAll('.controls input')

    // const handleUpdate = () => {
    //   console.log(value)
    // }
    }, [])
  
  return (
    <div className='js3container'>
      <h2>Update CSS variables with <span className='hl'>JS</span></h2>

      <div className='controls'>
        <label for='spacing'>Spacing:</label>
        <input type='range' name='spacing' mim='10' max='200' value='10' data-sizing='px'></input>

        <label for='blur'>Blur:</label>
        <input type='range' name='blur' mim='0' max='25' value='10' data-sizing='px'></input>

        <label for='base'>Base color</label>
        <input type='color' name='base' value='#ffc600'></input>
      </div >

      <img className='blackAndWhite' src='https://images.pexels.com/photos/144428/pexels-photo-144428.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'/>
    </div >
  )
}

