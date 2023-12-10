import { useState } from 'react'
import './App.css'
import SingleCard from './components/SingleCard'

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
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)

  // shuffle cards for new game
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map(card => ({ ...card, id: Math.random() }))

    setCards(shuffledCards)
    setTurns(0)
  }

  // handle a choice
  const handleChoice = (card) => {
    console.log(card)
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }

  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New Game</button>

      <div className="card-grid">
        {cards.map(card => (
          <SingleCard
            key={card.id}
            card={card}
            handleChoice={handleChoice}
          />
        ))}
      </div>

    </div>
  );
}


export default App