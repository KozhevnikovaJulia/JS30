import React from 'react'
import s from './JS1.module.css'

export const JS1 = () => {  
      return (
        <div className={s.container}>
         <div className={s.keys}>
           <div data-key="65" className={s.key}>
             <p>A</p>
             <span className={s.sound}>click</span>
           </div>
           <div data-key="66" className={s.key}>
             <p>B</p>
             <span className={s.sound}>hip</span>
           </div>
           <div data-key="67" className={s.key}>
             <p>C</p>
             <span className={s.sound}>hop</span>
           </div><div data-key="68" className={s.key}>
             <p>D</p>
             <span className={s.sound}>la-la</span>
           </div>
           <div data-key="69" className={s.key}>
             <p>E</p>
             <span className={s.sound}>lay</span>
           </div>
           <div data-key="70" className={s.key}>
             <p>F</p>
             <span className={s.sound}>hey</span>
           </div>
           <div data-key="71" className={s.key}>
             <p>G</p>
             <span className={s.sound}>you</span>
           </div>
           <div data-key="72" className={s.key}>
             <p>H</p>
             <span className={s.sound}>bum</span>
           </div>
           <div data-key="73" className={s.key}>
             <p>I</p>
             <span className={s.sound}>clap</span>
           </div>
           <div data-key="74" className={s.key}>
             <p>J</p>
             <span className={s.sound}>took</span>
           </div>
         </div>
         </div>
      )
    }

