import './App.css';
import Board from './components/board/board';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {

  const [solution, setSolution] = useState(null);


  useEffect(() => {

    const options = {
      method: 'GET',
      url: 'https://wordle-answers-solutions.p.rapidapi.com/answers',
      headers: {
        'X-RapidAPI-Key': '16f7a722d7msh33d1b391f70ea73p10d499jsn96cf244bdfab',
        'X-RapidAPI-Host': 'wordle-answers-solutions.p.rapidapi.com'
      }
    };

    axios.request(options).then(function (response) {
      const randomSolution = response.data.data[Math.floor(Math.random() * response.data.data.length)]
      console.log(randomSolution.answer);
      setSolution(randomSolution.answer);
    }).catch(function (error) {
      console.error(error);
    });

  }, [setSolution]);

  return (
    <div>
      <h1>Wordle</h1>
      <Board />
      {solution && <h2>Solution is {solution}!</h2>}
      <h2>chip</h2>
    </div>

  );
}

export default App;


// Resources
// http://localhost:3001/solutions


// https://www.youtube.com/watch?v=BpNthEFnoJ0&list=PL4cUxeGkcC9gXdVXVJBmHpSI7zCEcjLUX&index=2
