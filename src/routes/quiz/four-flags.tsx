import { createSignal, Show, createEffect, on } from 'solid-js'
import { QuizSettings } from '~/model/quiz'
import FourCountryQuiz from "~/components/FourCountryQuiz"
import QuizSetting from '~/components/QuizSetting'

export default function Home() {
  const [startQuiz, setStartQuiz] = createSignal(false)
  const [quizSettings, setQuizSettings] = createSignal<QuizSettings>({ amount: 1, continent: "North America", time: 2 });
  createEffect(on(quizSettings, () => {

    console.log(quizSettings())
  }, { defer: true }))

  return (

    <div class="h-full">

      <Show when={startQuiz()} fallback={<QuizSetting onStartQuiz={(settings: QuizSettings) => {
        setQuizSettings(settings)
        setStartQuiz(true)
      }} />}>
        <FourCountryQuiz settings={quizSettings()} />
      </Show>

    </div>
  )
}
