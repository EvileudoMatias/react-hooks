import { useState, useEffect } from "react";
import './App.css';

export default function App() {

  const [count, setCount] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      console.log('Executou depois de 2 segundos');
    }, 2000);

    return () => {
      clearTimeout(timeout);
    }
  }, [count]);

  function counter() {
    setCount(count +1);
  }

  return (
    <>
    <div>
      <span>{count}</span>
      <button onClick={counter}>COUNTER</button>
    </div>
    </>
  )
}
