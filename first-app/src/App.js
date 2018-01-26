import React, { Component } from 'react';
import './App.css';


class Display extends Component{
  render(){
    return <div className="Display">0</div>
  }
}

class Keyboard extends Component{
render(){
  return (
    <div className="Keyboard">
      <button>C</button>
      <button>+/-</button>
      <button>%</button>
      <button class="button button_orange">/</button>

      {/* <button>7</button> */}
      <NumberButton number={7}/>
      <NumberButton number={8}/>
      <NumberButton number={9}/>
      <button class="button button_orange">X</button>

      <NumberButton number={4}/>
      <NumberButton number={5}/>
      <NumberButton number={6}/>
      <button class="button button_orange">-</button>

      <NumberButton number={1}/>
      <NumberButton number={2}/>
      <NumberButton number={3}/>
      <button class="button button_orange">+</button>             

      <button class="button button_zero">0</button>
      <button>.</button>
      <button class="button button_orange">=</button>
    </div> 
  )
}
}

class NumberButton extends Component{
  render(){
    return <button> {this.props.number} </button>
  }
}




class App extends Component {

  render() {
    return (
      <div className="App">
        <Display />
        <Keyboard />
               
      </div>
    );
  }
}

export default App;

// <div className="Display">0</div>
// <div className="Keyboard">
//   <button>C</button>
//   <button>+/-</button>
//   <button>%</button>
//   <button class="button button_orange">/</button>

//   <button>7</button>
//   <button>8</button>
//   <button>9</button>
//   <button class="button button_orange">X</button>

//   <button>4</button>
//   <button>5</button>
//   <button>6</button>
//   <button class="button button_orange">-</button>

//   <button>1</button>
//   <button>2</button>
//   <button>3</button>
//   <button class="button button_orange">+</button>             

//   <button>0</button>
//   <button>0</button>
//   <button>.</button>
//   <button class="button button_orange">=</button>
// </div> 