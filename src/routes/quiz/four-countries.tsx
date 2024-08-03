import { createSignal, Show } from 'solid-js'
import { makePersisted } from '@solid-primitives/storage'
import FourCountryQuiz from "~/components/FourCountryQuiz"
import QuizSetting from '~/components/QuizSetting'

export default function Home() {
  const [startQuiz, setStartQuiz] = createSignal(false)

  return (

    <div class="h-full">

      <Show when={startQuiz()} fallback={<QuizSetting onStartQuiz={() => { setStartQuiz(true) }} />}>

        <FourCountryQuiz />
      </Show>

    </div>
  )
}



