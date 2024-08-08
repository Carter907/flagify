import { createEffect, createSignal, For, on } from "solid-js";
import { Continent } from "~/model/flag";
import { Time } from "~/model/quiz"
import { QuizSettings } from "~/model/quiz";

interface QuizSettingProps {
  onStartQuiz: (settings: QuizSettings) => void
}

export default function QuizSetting({ onStartQuiz }: QuizSettingProps) {
  const [continent, setContinent] = createSignal<Continent>("Oceania");
  const [time, setTime] = createSignal<Time>(0);
  const [amount, setAmount] = createSignal<number>(1);

  createEffect(on(time, () => {
    console.log(time())
  }, { defer: true }))
  createEffect(on(continent, () => {
    console.log(continent())
  }, { defer: true }))
  createEffect(on(amount, () => {
    console.log(amount())
  }, { defer: true }))
  return (
    <div class="flex flex-col gap-5">
      <p class="text-2xl">
        Settings
      </p>

      <div class="flex flex-col w-64 gap-2 dark:bg-neutral-800 bg-neutral-200 p-2 rounded shadow-md">
        <label class="opacity-50">time (mins):</label>
        <select id="time-field" class="w-full p-2 rounded dark:bg-neutral-800" required onchange={(val) => { setTime(Number.parseInt(val.target.value) as Time) }}>

          <For each={[0, 1, 2]}>

            {(item) =>
              <option>

                {item}
              </option>
            }
          </For>

        </select>

        <div>
          <label class="opacity-50">continent:</label>
          <select class="w-full p-2 rounded dark:bg-neutral-800" required onchange={(val) => { setContinent(val.target.value as Continent) }}>
            <For each={["Oceania", "Africa", "Asisa", "North America", "South America", "Europe", "Antartica"]}>

              {(item) => <option>
                {item}
              </option>}
            </For>

          </select>

        </div>
        <div>
          <label class="opacity-50">amount:</label>
          <input class="w-full p-2 rounded dark:bg-neutral-800" required min="1" step="5" placeholder="amount" type="number"
            onchange={(val) => { setAmount(Number.parseInt(val.target.value)) }} />

        </div>

      </div >
      <button onclick={() => onStartQuiz({

        amount: amount(),
        time: time(),
        continent: continent(),

      })} class="self-end p-2 border rounded w-fit">
        start
      </button>
    </div >
  )
}
