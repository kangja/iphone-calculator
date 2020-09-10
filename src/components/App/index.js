import React, {useState} from "react";
import Button from "../Button"
import "./App.css"

const App = () => {
  const [value, setValue] = useState("0")

  const handleButtonPress = (content) => () => { 

    //make the value a number first and make everything back to strings.
    setValue( parseFloat(value) + content.toString( ))
  }

  return <div className="App">
    <div className="top">4:43</div>
    <div className="display">{value}</div>
    <div className="buttons">

      {/* props used here is "content" of a button. The value of content will be AC, 0, +, -, and etc. */}
      <Button onButtonClick={handleButtonPress} content= "AC" type="function" />
      <Button onButtonClick={handleButtonPress} content= "±" type="function" />
      <Button onButtonClick={handleButtonPress} content= "%" type="function" />
      <Button onButtonClick={handleButtonPress} content= "÷" type="operator"/>
      <Button onButtonClick={handleButtonPress} content= "7" />
      <Button onButtonClick={handleButtonPress} content= "8" />
      <Button onButtonClick={handleButtonPress} content= "9" />
      <Button onButtonClick={handleButtonPress} content= "×" type="operator"/>
      <Button onButtonClick={handleButtonPress} content= "4" />
      <Button onButtonClick={handleButtonPress} content= "5" />
      <Button onButtonClick={handleButtonPress} content= "6" />
      <Button onButtonClick={handleButtonPress} content= "−" type="operator"/>
      <Button onButtonClick={handleButtonPress} content= "1" />
      <Button onButtonClick={handleButtonPress} content= "2" />
      <Button onButtonClick={handleButtonPress} content= "3" />
      <Button onButtonClick={handleButtonPress} content= "+" type="operator"/>
      <Button onButtonClick={handleButtonPress} content= "0" />
      <Button onButtonClick={handleButtonPress} content= "." />
      <Button onButtonClick={handleButtonPress} content= "= " type="operator"/>
      
      
      
      



    </div>
    <div className="button">-</div>
  </div> 
}

export default App;