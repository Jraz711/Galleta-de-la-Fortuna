import { useState } from 'react'
import './App.css'
import ButtonPhrase from './components/ButtonPhrase'
import PhrasesCard from './components/PhrasesCard'
import phrases from './utils/phrases.json'
import getRandomElementFromArray from './utils/randomElementFromArray'
function App() {

  const initialValue = getRandomElementFromArray(phrases)
  const [phraseRandom, setPhraseRandom] = useState(initialValue)

  console.log(phraseRandom)
  
  return (
  <div className="App">
    <h1>Galleta de la fortuna </h1>
    <PhrasesCard phraseRandom={phraseRandom}/>
    <ButtonPhrase setPhraseRandom={setPhraseRandom}/>
  </div>
  )
}

export default App
