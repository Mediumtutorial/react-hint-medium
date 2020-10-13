import React, {useEffect, useState} from 'react';
import axios from 'axios'
import { Hint } from 'react-autocomplete-hint';
import './App.css'

function App() {
  const [hintData, setHintData] = useState([])
  const [text, setText] = useState('')

  const getData = async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users')
      var hintArray = []
       res.data.map(a => hintArray.push(a.name))
        setHintData(hintArray)
  }

  useEffect(()=> {
    getData()
  })

  return (
    <div className="App">
      <h5>Try typing these words</h5>
      <code>{`[${hintData.toString()}]`}</code>
      <br/>
      <br/>
      <br/>
     <Hint options={hintData} allowTabFill>
    <input className='input-with-hint'
        value={text}
        onChange={e => setText(e.target.value)} 
        
        />
      </Hint>
    </div>
  );
}

export default App;
