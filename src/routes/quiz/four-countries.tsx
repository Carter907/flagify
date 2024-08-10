import { createSignal, Show, createEffect, on } from 'solid-js'
import { QuizSettings } from '~/model/quiz'
import FourCountryQuiz from "~/components/FourCountryQuiz"
import QuizSetting from '~/components/QuizSetting'
import ScoreScreen from '~/components/ScoreScreen'

export default function Home() {
  const [startQuiz, setStartQuiz] = createSignal(false)
  const [quizSettings, setQuizSettings] = createSignal<QuizSettings>({ amount: 1, continent: "North America", time: 2 });
  const [endQuiz, setEndQuiz] = createSignal(false)
  const [score, setScore] = createSignal(0);
  const [total, setTotal] = createSignal(0);
  createEffect(on(quizSettings, () => {

    console.log(quizSettings())
  }, { defer: true }))

  return (

    <div class="h-full">

      <Show when={startQuiz()} fallback={<QuizSetting onStartQuiz={(settings: QuizSettings) => {
        setQuizSettings(settings)
        setStartQuiz(true)
      }} />}>
        <Show when={!endQuiz()} fallback={<ScoreScreen score={score()} total={total()} />}>
          <FourCountryQuiz settings={quizSettings()} onFinished={(score, total) => {
            setScore(score);
            setTotal(total);
            setEndQuiz(true)
          }} />
        </Show>

      </Show>

    </div>
  )
}



