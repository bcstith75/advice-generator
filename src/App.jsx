import {useState, useEffect} from "react";
import dividerImg from './images/pattern-divider-desktop.svg';
import diceImg from './images/icon-dice.svg';

function App() {
  const [quotes, setQuotes] = useState('');

  const getQuote = async () => {

    const response = await fetch('https://api.adviceslip.com/advice');
    const data = await response.json();

      setQuotes(data.slip);
  }

  useEffect(() => {
    getQuote()
  }, [])

  const handleQuote = () => {
    getQuote()
  }

  return (
    <main>
      <div className="centered">
        <div className="inner-section">

              <h1>Advice #{quotes.id}</h1>
              <p>{quotes.advice}</p>

            <div className="divider-image">
              <img src={dividerImg} alt="" />
            </div>

            <button className="btn" onClick={handleQuote}>
              <img src={diceImg} alt="" />
            </button>
        </div>
      </div>

    </main>
  )
}

export default App
