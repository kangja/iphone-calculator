import React, {useState} from "react";
import Button from "../Button"
import "./App.css"

const App = () => {
  const [value, setValue] = useState("0")

  // in the beginning, we don't have any memory. But, when we press operator buttons, 
  const [memory, setMemory] = useState(null);

  // keeping track of operator
  const [operator, setOperator] = useState(null);

  const handleButtonPress = (content) => () => {
    const num = parseFloat(value);

    if (content === "AC") {
      setValue("0");
      setMemory(null);
      setOperator(null);
      return;
    }

    if (content === "±") {
      setValue((num * -1).toString());
      return;
    };

    if (content === "%") {
      setValue((num / 100).toString());
      setMemory(null);
      setOperator(null);
      return;
    }

    if (content === "+") {
      // if there is a previous operation. It means we are doing chaining. 
      if (operator !== null) {
        if (operator === "+") {
          setMemory(memory + parseFloat(value));
        } else if (operator === "−") {
          setMemory(memory - parseFloat(value));
        } else if (operator === "×") {
          setMemory(memory * parseFloat(value));
        } else if (operator === "÷") {
          setMemory(memory / parseFloat(value));
        }
      } else {
        setMemory(parseFloat(value));
      }
      setValue("0");
      setOperator("+");
      return;
    }

    if (content === "−") {
      if (operator !== null) {
        if (operator === "+") {
          setValue((memory + parseFloat(value)).toString());
        } else if (operator === "−") {
          setValue((memory - parseFloat(value)).toString())
        } else if (operator === "×") {
          setValue((memory * parseFloat(value)).toString())
        } else if (operator === "÷") {
          setValue((memory / parseFloat(value)).toString());
        }
      }
      setMemory(parseFloat(value));
      setValue("0");
      setOperator("−");
      return;
    }

    if (content === "×") {
      if (operator !== null) {
        if (operator === "+") {
          setValue((memory + parseFloat(value)).toString());
        } else if (operator === "−") {
          setValue((memory - parseFloat(value)).toString())
        } else if (operator === "×") {
          setValue((memory * parseFloat(value)).toString())
        } else if (operator === "÷") {
          setValue((memory / parseFloat(value)).toString());
        }
      }
      setMemory(parseFloat(value));
      setValue("0");
      setOperator("×");
      return;
    }

    if (content === "÷") {
      if (operator !== null) {
        if (operator === "+") {
          setValue((memory + parseFloat(value)).toString());
        } else if (operator === "−") {
          setValue((memory - parseFloat(value)).toString())
        } else if (operator === "×") {
          setValue((memory * parseFloat(value)).toString())
        } else if (operator === "÷") {
          setValue((memory / parseFloat(value)).toString());
        }
      }
      setMemory(parseFloat(value));
      setValue("0");
      setOperator("÷");
      return;
    }

    if (content === "=") {
      // if there is no operatur, don't do anything
      if (!operator) return;

      if (operator === "+") {
        setValue((memory + parseFloat(value)).toString());
      } else if (operator === "−") {
        setValue((memory - parseFloat(value)).toString())
      } else if (operator === "×") {
        setValue((memory * parseFloat(value)).toString())
      } else if (operator === "÷") {
        setValue((memory / parseFloat(value)).toString());
      }
      setMemory(null);
      setOperator(null);
      return;
    }
  
    //make the value a number first and make everything back to strings. Having parseFloat infront gets rid of the leading 0.
    setValue((parseFloat(num + content)).toString());
  };

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
      <Button onButtonClick={handleButtonPress} content= "=" type="operator"/>
      
    </div>
    <div className="button">-</div>
  </div> 
}

export default App;