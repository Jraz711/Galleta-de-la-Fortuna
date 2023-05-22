import phrases from '../utils/phrases.json'
import getRandomElementFromArray from "../utils/randomElementFromArray"
const ButtonPhrase = ({setPhraseRandom}) => {

  const handleRandomPhrase = () => {
    const newRandomPhrase = getRandomElementFromArray(phrases)
    setPhraseRandom(newRandomPhrase)
  }

  return (
    <button onClick={handleRandomPhrase}>Ver Otro</button>
  )
}

export default ButtonPhrase