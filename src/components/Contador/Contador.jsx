import { useState } from 'react';
import './Contador.css';

export default function Contator(){
    const [numero, setNumero] = useState(0);

    function Contar (){
        setNumero(numero + 1);
    }
    function desContar(){
        setNumero(numero - 1);
    }
      function Resetar(){
        setNumero(0);
    }
    return(
        <div className='container'>
        <span>{numero}</span>
        <div className='botoes'>
        <button onClick={desContar}>-</button>
        <button onClick={Resetar}>Zerar</button>
        <button onClick={Contar}>+</button>
        </div>
        </div>
    );
}