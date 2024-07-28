import { createSignal, onMount, createEffect, For, on } from "solid-js"
import { createStore, produce } from "solid-js/store"
import { makePersisted } from "@solid-primitives/storage"
import FourCountryQuestionData from "~/model/fourCountryQuestion"
import flags from "~/flags.json"
import Flag from "~/model/flag"


export default function FourCountryQuiz() {
  const [questionData, setQuestionData] = createSignal<FourCountryQuestionData>({
    correctFlag: { name: '', continent: '', description: '', img: '' },
    choices: []
  });
  const [score, setScore] = createSignal(0)

  createEffect(on(score, () => {

    localStorage.setItem("score", JSON.stringify(score()))
  }, { defer: true }));
  createEffect(on(questionData, () => {

    localStorage.setItem("fourCountryQuestion", JSON.stringify(questionData()))
  }, { defer: true }))

  createEffect(() => {

    const storedQuestionData = localStorage.getItem("fourCountryQuestion");
    if (storedQuestionData) {
      console.log('getting questionData')
      setQuestionData(JSON.parse(storedQuestionData));
    } else {

      setQuestionData(getRandomQuestionData())
    }
    const storedScore = localStorage.getItem("score")
    if (storedScore) {
      console.log('getting score');
      setScore(JSON.parse(storedScore))
    } else {

      setScore(0)
    }
  })
  return (
    <div class="flex flex-row">

      <div class="p-2 border rounded basis-1/2">
        <img class="w-96 shadow-md border" src={questionData().correctFlag.img}></img>

        <div class="grid grid-cols-2 gap-2 py-2">
          <For each={questionData().choices}>{(flag, _) =>
            <button class="p-2 border rounded" onclick={() => {
              if (flag.name === questionData().correctFlag.name) {

                setScore(score() + 1);
                alert("right! current score: " + score())
                setQuestionData(getRandomQuestionData())
              } else {
                alert('wrong!')
              }
            }}>
              {flag.name}
            </button>
          }</For>

        </div>

      </div>

      <div class="border p-4 rounded-full">
        {score()}
      </div>
    </div>


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
