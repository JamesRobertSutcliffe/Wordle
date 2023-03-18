import './App.css';
import Board from './components/board/board';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {

  const [solution, setSolution] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:3003/solutions").then((response) => {
      const randomSolution = response.data[Math.floor(Math.random() * response.data.length)]
      setSolution(randomSolution.word);
      console.log(randomSolution.word);
    })
  }, [setSolution]);

  return (
    <div>
      <h1>Wordle</h1>
      <Board />
      {solution && <h2>Solution is {solution}!</h2>}
    </div>

  );
}

export default App;


// Resources
// http://localhost:3001/solutions


// https://www.youtube.com/watch?v=BpNthEFnoJ0&list=PL4cUxeGkcC9gXdVXVJBmHpSI7zCEcjLUX&index=2
