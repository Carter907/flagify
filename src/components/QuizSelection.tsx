import { For } from 'solid-js'
import quizThumbnails from '~/quiz-thumbnails.json'

export default function QuizSelection() {


  return (
    <div class="grid grid-cols-2 gap-4 w-fit">

      <For each={quizThumbnails}>{(quizThumbnail, _) =>

        <a href={"/flagify" + quizThumbnail.path} class="border shadow-2xl hover:bg-neutral-100 dark:hover:bg-neutral-700 dark:bg-neutral-800 rounded-xl p-4">

          <p class="text-2xl text-center">{quizThumbnail.name}</p>
          <p class="opacity-50">{quizThumbnail.description}</p>

        </a>

      }</For>

    </div>

  )
}

