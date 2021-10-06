import { useState } from 'react';
import { Footer } from './components/Footer';
import { Header } from './components/Header';


const App = () => {
  let name = "Kayto";
  
//estado inicial
  const [age, setage] = useState(23);
  const [bg, setbg] = useState('#FF0000');
  const [lista , setlista] = useState([
    "Primeira frase da lista",
    "Segunda frase da lista",
    "Terceira frase da lista",
    "Quarta frase da lista",
    "Quinta frase da lista",
  ])

  const handle90 = () => {
    setage(90)
    setbg('#32CD32')
  }
  const handle23 = () => {
    setage(23)
    setbg('#4682B4')
  }


  return(
    <div style={{backgroundColor: bg}}>
      <Header name={name} age={age}/>

      {age === 90 && 
        <button onClick={handle23}>Click aqui 23</button>
      } 

      {age === 23 && 
        <button onClick={handle90}>Click aqui 90</button>      
      }

      <hr/>

      <ul>
        {lista.map((frase , index)=>(
          <li key = {index}>{frase}</li>
        ))}
      </ul> 

      <hr/>
      
      <Footer />

    </div>
  )
}
export default App; 