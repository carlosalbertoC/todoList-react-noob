import { InputGroup, Task } from './components';
import './App.css';
import { useState } from 'react';

function App() {

  const [InputValue, setInputValue] = useState([])
 
 
  function getValueFromTheInput(text) {
    setInputValue([...InputValue,{
      name: text,
      id:InputValue.lenght
    }])
    console.log(InputValue);
  }


  

  return (
    <div className="App container">

        <InputGroup taskValue={getValueFromTheInput}/>
        {InputValue.length>0 && InputValue.map((e,i) =>{
          return <Task key={i} timeAgo={"Hace rato mrd"} taskName={e.name} timeCreatedTask={"13:08 de ayer weon "}/>
        })}

    </div>
  );
}

export default App;
