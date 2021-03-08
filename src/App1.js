import React, {Component} from 'react'
import './App.css'

//Классовая компонента. При онклике на li ее класс меняется на active. Остальные лишки остаются не тронутыми.

class App1 extends Component {  
    constructor(props) {
        super(props)
        this.state ={
          values: [
            { id: 1, text: "LI-1" },
            { id: 2, text: "LI-2" },
            { id: 3, text: "LI-3" },
            { id: 4, text: "LI-4" }
          ],
    isCalalogLinkActive: false,
    activeId: 0
  }
    }
  toggleCatalogLink = () => {
    console.log(this.state.isCalalogLinkActive)
    this.setState({     
       isCalalogLinkActive : !this.state.isCalalogLinkActive       
    })
  }


    render() {
      return (
        <div className={this.state.isCalalogLinkActive ? "nav__main-v" : "nav__main-v" + " " + "active"}>
          <a href="#" onClick={() => { this.toggleCatalogLink() }} >Каталог</a>
          <a href="#" style={this.state.isCalalogLinkActive ? "" : { "display": "none" }}>х</a>
          <ul>
            {this.state.values.map((val) => (
              <li onClick={() => this.setState({activeId:val.id})}>
                {val.text} -- {this.state.activeId === val.id ? "Active" : "Inactive"}
              </li>
            ))}
          </ul>
        </div>
      )
    }
}

export default App1;