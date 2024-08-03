import { createSignal } from "solid-js";
import { Time } from "~/model/quiz"

interface QuizSettingProps {
  onStartQuiz: () => void
}

export default function QuizSetting({ onStartQuiz }: QuizSettingProps) {
  const [time, setTime] = createSignal<Time>(0);

  return (
    <div class=" border flex flex-col gap-10">
      <p class="text-2xl">
        Settings
      </p>
      <div class="flex-row flex gap-2">
        <label for="time-field">Time</label>
        <select id="time-field" class="p-2 rounded dark:bg-neutral-800">
          <option>
            0
          </option>
          <option>
            1
          </option>
          <option>
            2
          </option>

        </select>

      </div>
      <button onclick={onStartQuiz} class="self-end p-2 border rounded w-fit">
        start
      </button>
    </div>
  )
}
