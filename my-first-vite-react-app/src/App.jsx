import { useState } from 'react'
import './App.css'
import InputBoard from './components/InputBoard'


  
    
      function App() {
        const [inputValue, setInputValue] = useState('')
        const [inputList, setInputList] = useState([])
        const addItem =() =>{
console.log("", inputValue);
setInputList([...inputList, inputValue])
        }
        
        return (
      <>
  <input value = {inputValue}type='text' onChange={(event) => setInputValue(event.target.value)}/>
  <button onClick={addItem}>지출등록</button>
      <InputBoard inputList={inputList}/>
     
    </>
  )
}

export default App
