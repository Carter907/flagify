import { createSignal, createEffect, For, on } from "solid-js"
import { getFourCountryList } from "~/model/four-countries/questionData"
import QuestionData from '~/model/four-countries/questionData'
import { QuizSettings } from '~/model/quiz'
import flags from "~/flags.json"
import Flag from "~/model/flag"


interface FourCountryQuizProps {
  settings: QuizSettings,
  onFinished: (score: number, questionCount: number) => void
}

export default function FourCountryQuiz({ settings, onFinished }: FourCountryQuizProps) {
  const [questions, setQuestions] = createSignal<QuestionData[]>(getFourCountryList(settings, flags as Flag[]))
  const [index, setIndex] = createSignal(0)
  const [score, setScore] = createSignal(0)
  const [answerMessage, setAnswerMessage] = createSignal('')

  // createEffect(on(score, () => {
  //
  //   localStorage.setItem("score", JSON.stringify(score()))
  // }, { defer: true }));
  // createEffect(on(questionData, () => {
  //
  //   localStorage.setItem("fourCountryQuestion", JSON.stringify(questionData()))
  // }, { defer: true }))
  // createEffect(on(questions, () => {
  //
  //   localStorage.setItem("fourCountryQuestions", JSON.stringify(questions()))
  // }, { defer: true }))
  createEffect(() => {
    //
    //
    // const storedScore = localStorage.getItem("score")
    // if (storedScore) {
    //   console.log('getting score');
    //   setScore(JSON.parse(storedScore))
    // } else {
    //
    // }
    //
    // const storedQuestions = localStorage.getItem("fourCountryQuestions")
    // if (storedQuestions) {
    //   console.log('getting questions')
    //   setQuestions(JSON.parse(storedQuestions));
    // } else {
    // }
    // const storedQuestionData = localStorage.getItem("fourCountryQuestion");
    // if (storedQuestionData) {
    //   console.log('getting questionData')
    //   setQuestionData(JSON.parse(storedQuestionData));
    // } else {
    //
    // }
    // const questionIndex = localStorage.getItem("questionIndex")
    // if (questionIndex) {
    //   console.log('getting index')
    //   setIndex(JSON.parse(questionIndex));
    // } else {
    //   setIndex(0)
    // }
  })
  return (

    <div class="p-2 flex flex-row justify-evenly h-[70vh]">

      <div class="rounded basis-3/4 h-full flex gap-20 flex-col justify-center items-center">
        <img class="w-96 shadow-md scale-150" src={questions()[index()].correctFlag.img}></img>

        <div class="grid grid-cols-2 gap-2 py-2 w-full">
          <For each={questions()[index()].choices}>{(flag, _) =>
            <button class="p-4 border rounded w-full" onclick={() => {

              if (flag.name === questions()[index()].correctFlag.name) {

                setScore(score() + 1);
                setAnswerMessage("right! good work")

                if (index() === questions().length - 1) {

                  onFinished(score(), questions().length);
                } else {
                  setIndex(index() + 1);
                }
              } else {
                setAnswerMessage('wrong!')
                setIndex(index() + 1);

                if (index() === questions().length - 1) {

                  onFinished(score(), questions().length);
                } else {
                  setIndex(index() + 1);
                }
              }


              console.log(index())
            }}>
              {flag.name}
            </button>
          }</For>

        </div>

      </div>

      <div class="self-start w-52 h-24 p-4 rounded-full">
        <p class="text-4xl text-center">

          {score()}/{questions().length}
        </p>
        <p class="text-center">

          {answerMessage()}
        </p>
      </div>
    </div>

  )
}

