import React, { useState } from 'react'
import './App.css'

//Функциональная компонента. При онклике на li ее класс меняется на active. Остальные лишки остаются не тронутыми.

const App2 = () => {  
  const values = [
    { id: 1, text: "LI-1" },
    { id: 2, text: "LI-2" },
    { id: 3, text: "LI-3" },
    { id: 4, text: "LI-4" }
  ];
  const [activeId, setActiveId] = useState();

      return (
              
          <ul>
            {values.map((val) => (
              <li onClick={() => setActiveId(val.id)}>
                {val.text} -- {activeId === val.id ? "Active" : "Inactive"}
              </li>
            ))}
          </ul>
        
      )
    }

export default App2;