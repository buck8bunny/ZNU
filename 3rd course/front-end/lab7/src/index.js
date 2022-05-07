import React, { Component  } from "react";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import "./index.css";
import { StrictMode } from "react";

import gif1 from "./assets/images/1.gif"
import gif2 from "./assets/images/2.gif"
import gif3 from "./assets/images/3.gif"
import gif4 from "./assets/images/4.gif"
import gif5 from "./assets/images/5.gif"
import gif6 from "./assets/images/6.gif"
import gif7 from "./assets/images/7.gif"
import gif8 from "./assets/images/8.gif"
import gif9 from "./assets/images/9.gif"

class App extends Component {
  constructor(props) {
    super(props)
    this.breakPoints = [
      { width: 1, itemsToShow: 1 },
      { width: 550, itemsToShow: 2, itemsToScroll: 2 },
      { width: 768, itemsToShow: 3,  itemsToScroll: 3 }
    ]
  }
 
  render () {
    return (
      <div className="App">
        <div className="carousel-wrapper">
          <Carousel breakPoints={this.breakPoints}>
            <img src={gif1} alt='1.gif'></img>
            <img src={gif2} alt='2.gif'></img>
            <img src={gif3} alt='3.gif'></img>
            <img src={gif4} alt='4.gif'></img>
            <img src={gif5} alt='5.gif'></img>
            <img src={gif6} alt='6.gif'></img>
            <img src={gif7} alt='7.gif'></img>
            <img src={gif8} alt='8.gif'></img>
            <img src={gif9} alt='9.gif'></img>         
          </Carousel>
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);