import { useRef } from "react";

export default function InputGroup(props) {

  const {taskValue} = props

  let textInput = useRef(null);

  function getCurrentValue() {
    taskValue(textInput.current.value)
  }

  return(
    <div className="mt-4">
      <h2 className="text-start fs-1">TodoList</h2>
      <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" ref={textInput}/>
        <button onClick={getCurrentValue} className="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
      </div>      
    </div>
  )
}