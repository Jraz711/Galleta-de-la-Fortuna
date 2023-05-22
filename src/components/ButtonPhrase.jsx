import phrases from '../utils/phrases.json'
import getRandomElementFromArray from '../utils/randomElementFromArray'

const ButtonPhrase = ({setPhraseRandom,setPathRandom, arrBackground}) => {

  const handleRandomPhrase = () => {
    const newRandomPhrase = getRandomElementFromArray(phrases)
    setPhraseRandom(newRandomPhrase)

    const newRandomBackground = getRandomElementFromArray(arrBackground)
    setPathRandom(newRandomBackground)    
  }

  return (
    <button className='ButtomRandom' onClick={handleRandomPhrase}>Ver Otro</button>
  )
}

export default ButtonPhrase