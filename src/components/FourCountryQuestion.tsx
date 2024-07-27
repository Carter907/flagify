import { createSignal } from "solid-js"
import flags from "../flags.json"
import { For } from "solid-js"
import Flag from "~/model/flag"


export default function FourCountryQuestion() {
  const [answerMessage, setAnswerMessage] = createSignal('')
  const [score, setScore] = createSignal(0)
  const [fourCountryQuestion, setFourCountryQuestion] = createSignal(getRandomQuestionData())

  return (
    <div class="flex flex-row">

      <div class="p-2 border rounded basis-1/2">
        <img class="w-96 shadow-md border" src={fourCountryQuestion().correctFlag.img}></img>

        <div class="grid grid-cols-2 gap-2 py-2">
          <For each={fourCountryQuestion().choices}>{(flag, _) =>
            <button class="p-2 border rounded" onclick={() => {
              if (flag == fourCountryQuestion().correctFlag) {
                setScore(score() + 1)
                setAnswerMessage("Correct!")
              } else {
                setScore(score() - 1)
                setAnswerMessage("Oops! try again.")
              }

              setFourCountryQuestion(getRandomQuestionData())

            }}>
              {flag.name}
            </button>
          }</For>

        </div>
      </div>
      <div class="basis-1/2 font-bold ">

        {answerMessage()}
      </div>
    </div>

  )
}

function getRandomQuestionData(): { choices: Flag[], correctFlag: Flag } {
  let choices = []

  for (let i = 0; i < 4; i++) {
    let randomChoice;
    do {
      randomChoice = flags[Math.floor(Math.random() * flags.length)]

    } while (choices.indexOf(randomChoice) != -1);
    choices.push(randomChoice)
  }


  return {
    choices: choices,
    correctFlag: choices[Math.floor(Math.random() * 4)],
  }

}
