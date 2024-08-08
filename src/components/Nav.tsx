import ToggleTheme from "~/components/ToggleTheme";
import { VsHome } from 'solid-icons/vs'
import { IoFlagSharp } from 'solid-icons/io'
import { BiSolidPencil } from 'solid-icons/bi'
import { CgProfile } from 'solid-icons/cg'

export default function NavBar() {

  return (
    <nav class="flex border-b-2 border-neutral-400 dark:border-neutral-700 flex-row shadow-2xl md:gap-4 p-2 bg-neutral-300 dark:bg-neutral-800">

      <div class="md:w-2/3 w-full md:px-0 px-4 flex flex-row m-auto">
        <div class="basis-1/2 justify-start flex flex-row gap-2 md:gap-5">
          <a href="/flagify/" class="border hover:bg-neutral-200 dark:hover:bg-neutral-700 rounded p-2 md:w-32 w-full"><VsHome /> Home</a>
          <a href="/flagify/quiz" class="border hover:bg-neutral-200 dark:hover:bg-neutral-700 rounded p-2 md:w-32 w-full"><BiSolidPencil />Quiz</a>
          <a href="/flagify/flags" class="border hover:bg-neutral-200 dark:hover:bg-neutral-700 rounded p-2 md:w-32 w-full"><IoFlagSharp /> Flags</a>

        </div>
        <div class="basis-1/2 flex flex-row justify-end gap-2 md:gap-5">

          <a href="/flagify/profile" class="text-neutral-800 hover:text-neutral-600 dark:hover:text-neutral-300 dark:text-neutral-400 rounded p-2"><CgProfile size={50} /></a>
          <div class="inline-flex">

            <ToggleTheme></ToggleTheme>
          </div>
        </div>
      </div>

    </nav>
  )
}
