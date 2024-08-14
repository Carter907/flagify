import { createEffect } from 'solid-js'
import ToggleTheme from '~/components/ToggleTheme';

export default function Home() {

  return (
    <main class="flex-col flex h-[70vh]">

      <div class="bg-neutral-200 dark:bg-neutral-800 p-4 rounded">
        <p class="text-2xl">Welcome</p>
        <section>
          Welcome to Flagify, A World Flag Quizzing site to get better at recognizing country flags.
        </section>

      </div>
      <div>
        <p class="text-2xl">Learn</p>
        <section>
          Flagify helps you learn about different flags and the nations they represent.
        </section>
      </div>
    </main>
  );
}
