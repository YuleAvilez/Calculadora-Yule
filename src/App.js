import React, { useState } from 'react'
import "./App.css";
import stranger from "./assets/img/stranger.jpg"
const App = () => {
  const [result, setResult] = useState("")

   const handleClick = (e) => {
      setResult(result.concat(e.target.name));
   }
   const limpiar = () =>{
      setResult("");
   }

   const backspace = () => {
      setResult(result.slice(0, result.length - 1));
   }

   const calculate = () => {
      try{
        setResult(eval(result).toString());
      }catch(err){
        setResult("Error")
      }
      
   }
   <div img src="stranger.jpg" type="image"></div>
  return (
    <div className="container">
      <from>
          <input className="Wrapper" type="text" value={result}></input>
      </from>
        <div className="keypad" >
          <button className="operadores" onClick={limpiar} id="limpiar">AC</button>
          <button className="operadores" onClick={backspace} id="backspace">C</button>
          <button className="operadores" name="/" onClick={handleClick}>&divide;</button>
          <button name="7" onClick={handleClick}>7</button>
          <button name="8" onClick={handleClick}>8</button>
          <button name="9" onClick={handleClick}>9</button>
          <button className="operadores" name="*" onClick={handleClick}>*</button>
          <button name="4" onClick={handleClick}>4</button>
          <button name="5" onClick={handleClick}>5</button>
          <button name="6" onClick={handleClick}>6</button>
          <button className="operadores"name="-" onClick={handleClick}>&ndash;</button>
          <button name="1" onClick={handleClick}>1</button>
          <button name="2" onClick={handleClick}>2</button>
          <button name="3" onClick={handleClick}>3</button>
          <button className="operadores" name="+" onClick={handleClick}>+</button>
          <button name="0" onClick={handleClick}>0</button>
          <button name="." onClick={handleClick}>.</button>
          <button className="operadores" onClick={calculate} id="result">=</button>
        </div>
      </div>
  )
}

export default App