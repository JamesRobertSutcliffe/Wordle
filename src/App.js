import './App.css';
import Wordle from './components/logic/Wordle';
import { useEffect, useState } from 'react';

function App() {

  const words = ["apple", "beach", "cloud", "drift", "earth", "flame", "grape", "haste", "image", "jolly"];
  const [solution, setSolution] = useState(null);


  useEffect(() => {

  
    const randomIndex = Math.floor(Math.random() * words.length);

    setSolution(words[randomIndex].toUpperCase())

    

  }, [setSolution]);

  console.log(solution);

  return (
    <div>
      <h1>Wordle</h1>
      {solution && <Wordle solution={solution} />}
    </div>

  );
}

export default App;


// Resources
// http://localhost:3001/solutions


// https://www.youtube.com/watch?v=BpNthEFnoJ0&list=PL4cUxeGkcC9gXdVXVJBmHpSI7zCEcjLUX&index=2
