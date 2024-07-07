import { useEffect, useState } from 'react'
import './App.css'
import axios from "axios"


function App() {
  const [jokes,setJokes] = useState([])

  useEffect(()=>{
    axios.get('/api/jokes')
    .then((res)=>{
      //axios itself converts the data to json
      setJokes(res.data)
    })
    .catch(e=>{
      console.log(e);
    })
  },[])

  // console.log(jokes);
  return (
    <>
    <h1>Jagruk and Full Stack</h1>
    <p>JOKES :{jokes.length}</p>

    {
      jokes.map((joke)=>(
        <div key={joke.id}>
          <h3>{joke.title}</h3>
          <p>{joke.content}</p>
        </div>
      ))
    }
    </>
  )
}

export default App
