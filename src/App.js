import { useState } from 'react'
import './App.css'

const cardImages = [
  { "src": "/img/bath.png" },
  { "src": "/img/bee.png" },
  { "src": "/img/bug.png" },
  { "src": "/img/butter.png" },
  { "src": "/img/golu.png" },
  { "src": "/img/panu.png" },
]

function App() {
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)

  // shuffle cards for new game
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map(card => ({ ...card, id: Math.random() }))
      
    setCards(shuffledCards)
    setTurns(0)
  }

  console.log(cards, turns)

  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New Game</button>
    </div>
  );
}

export default App