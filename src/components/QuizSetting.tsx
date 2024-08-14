import { createEffect, createSignal, For, on } from "solid-js";
import { Continent } from "~/model/flag";
import { Time } from "~/model/quiz"
import { QuizSettings } from "~/model/quiz";
import flags from '~/flags.json'

interface QuizSettingProps {
  onStartQuiz: (settings: QuizSettings) => void
}

export default function QuizSetting({ onStartQuiz }: QuizSettingProps) {
  const [continent, setContinent] = createSignal<Continent>("Oceania");
  const [time, setTime] = createSignal<Time>(0);
  const [amount, setAmount] = createSignal<number>(flags.filter((val) => {
    if (val.continent === continent()) {
      return val
    }
  }).length);

  createEffect(on(time, () => {
    console.log(time())
  }, { defer: true }))
  createEffect(on(continent, () => {

    setAmount(flags.filter((val) => {
      if (val.continent === continent()) {
        return val
      }
    }).length)
    console.log(continent())
  }, { defer: true }))
  createEffect(on(amount, () => {
    console.log(amount())
  }, { defer: true }))
  return (
    <div class="flex flex-col gap-4 h-[70vh]">
      <p class="text-2xl">
        Choose your Settings!
      </p>

      <div class="flex flex-col w-1/2 h-full justify-evenly border dark:bg-neutral-800 bg-neutral-200 p-2 rounded shadow-md">
        <div class="shadow-md border rounded-full p-4 bg-neutral-100 dark:bg-neutral-900 items-center flex flex-row justify-evenly">
          <div class="text-red-500 opacity-70">time is not working yet...</div>
          <label class="opacity-50">time (mins):</label>
          <select id="time-field" disabled class="w-1/2 p-2 rounded-full dark:bg-neutral-800 text-center" required onchange={(val) => { setTime(Number.parseInt(val.target.value) as Time) }}>

            <For each={[0, 1, 2]}>

              {(item) =>
                <option>

                  {item}
                </option>
              }
            </For>

          </select>


        </div>
        <div class="shadow-md border rounded-full p-4 bg-neutral-100 dark:bg-neutral-900 items-center flex flex-row justify-evenly">

          <label class="opacity-50">continent:</label>
          <select class="w-1/2 p-2 rounded-full dark:bg-neutral-800 text-center" required onchange={(val) => { setContinent(val.target.value as Continent) }}>
            <For each={["Oceania", "Africa", "Asia", "North America", "South America", "Europe", "Antarctica"]}>

              {(item) => <option>
                {item}
              </option>}
            </For>

          </select>
        </div>
        <div class="shadow-md border rounded-full p-4 bg-neutral-100 dark:bg-neutral-900 items-center flex flex-row justify-evenly">
          <label class="opacity-50">amount:</label>
          <input class="w-1/2 p-2 rounded-full dark:bg-neutral-800 text-center" value={amount()} required min="1" max={flags.filter((val) => {
            if (val.continent === continent()) {
              return val
            }
          }).length} placeholder="amount" type="number"
            onchange={(val) => { setAmount(Number.parseInt(val.target.value)) }} />

        </div>

      </div >
      <button onclick={() => onStartQuiz({

        amount: amount(),
        time: time(),
        continent: continent(),

      })} class="border hover:bg-neutral-100 dark:hover:bg-neutral-700 dark:bg-neutral-800 py-2 px-6 self-end rounded-full w-fit">
        start
      </button>
    </div >
  )
}
