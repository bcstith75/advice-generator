import {useState, useEffect} from "react";

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
              <img src="images/pattern-divider-desktop.svg" alt="" />
            </div>

            <button className="btn" onClick={handleQuote}>
              <img src="images/icon-dice.svg" alt="" />
            </button>
        </div>
      </div>

    </main>
  )
}

export default App
