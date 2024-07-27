import { createSignal } from "solid-js"
import FourCountryQuestionData from "~/model/fourCountryQuestion"
import FourCountryQuestion from "./FourCountryQuestion"
import flags from "~/flags.json"
import Flag from "~/model/flag"

export default function FourCountryQuiz() {

  const [fourCountryQuestion, setFourCountryQuestion] = createSignal(getRandomQuestionData())
  const [answerMessage, setAnswerMessage] = createSignal('')
  const [score, setScore] = createSignal(0)
  return (

    <FourCountryQuestion questionData={fourCountryQuestion} answerMessage={answerMessage} onAnswer={(flag: Flag) => {
      if (flag.name === fourCountryQuestion().correctFlag.name) {

        setScore(score() + 1)
        setAnswerMessage("Correct!")
        setFourCountryQuestion(getRandomQuestionData())
      } else {
        setScore(score() - 1)
        setAnswerMessage("Oops! try again.")
      }


    }} />

  )
}
function getRandomQuestionData(): FourCountryQuestionData {
  let choices = []

  for (let i = 0; i < 4; i++) {
    let randomChoice;
    do {
      randomChoice = flags[Math.floor(Math.random() * flags.length)]

    } while (choices.indexOf(randomChoice) != -1);
    choices.push(randomChoice)
  }

  let questionData: FourCountryQuestionData = {
    correctFlag: choices[Math.floor(Math.random() * 4)],
    choices: choices,
  }

  return questionData;

}
