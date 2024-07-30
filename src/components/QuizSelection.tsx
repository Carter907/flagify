import { For } from 'solid-js'
import quizThumbnails from '~/quiz-thumbnails.json'

export default function QuizSelection() {


  return (
    <div class="grid grid-cols-2 gap-4 p-2 w-fit">

      <For each={quizThumbnails}>{(quizThumbnail, _) =>

        <a href={"/flagify" + quizThumbnail.path} class="border shadow-2xl dark:bg-neutral-800 rounded-full p-4">

          <p class="text-2xl">{quizThumbnail.name}</p>
          <p class="opacity-50">{quizThumbnail.description}</p>

        </a>

      }</For>

    </div>

  )
}

