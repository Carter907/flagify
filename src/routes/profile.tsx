import ToggleTheme from "~/components/ToggleTheme"
import { createEffect, createSignal } from 'solid-js'
export default function Home() {

  const [score, setScore] = createSignal(0);
  createEffect(() => {
    const storedScore = localStorage.getItem("score")
    if (storedScore) {
      console.log('getting score');
      setScore(JSON.parse(storedScore))
    } else {

      setScore(0)
    }
  })


  return (
    <div>
      <p class="text-2xl">
        Score: {score()}
      </p>
    </div>
  )
}
