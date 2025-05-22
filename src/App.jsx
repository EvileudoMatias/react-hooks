
import { useState, useEffect } from "react"

export default function App() {
  const [data, setData] = useState('');

  useEffect(()=>{
    fetch('https://api.github.com/users/EvileudoMatias')
      .then(response => response.json())
      .then(data => setData(data))
  }, []);

  console.log(data.name);

  return (
    <>
    <h1>UseEffects</h1>
    </>
  )
}
