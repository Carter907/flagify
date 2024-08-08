import StudyFlag from '../components/StudyFlag'
import Flag, { Continent } from '~/model/flag'
import flags from '../flags.json';
import { on, For, createSignal, createEffect, Show } from 'solid-js';
export default function Home() {
  const [showDescription, setShowDescription] = createSignal(true);
  const [continent, setContinent] = createSignal();

  createEffect(on(continent, () => {
    console.log(continent())

  }, { defer: true }))

  return (
    <div class="flex gap-4">

      <div class="flex flex-col gap-4">

        <button id="show-description" class="border hover:bg-neutral-100 dark:hover:bg-neutral-700 dark:bg-neutral-800 p-2 rounded-full" onclick={() => { setShowDescription(!showDescription()) }}>description</button>
        <select class="border hover:bg-neutral-100 dark:hover:bg-neutral-700 dark:bg-neutral-800 p-2 rounded-full" required onchange={(val) => { setContinent(val.target.value as Continent) }}>
          <For each={["All", "Oceania", "Africa", "Asia", "North America", "South America", "Europe", "Antarctica"]}>

            {(item) => <option>
              {item}
            </option>}
          </For>
        </select>

      </div>
      <div class="grid grid-cols-3 gap-4">

        <Show when={continent() && continent() !== "All"} fallback={
          <For each={flags as Flag[]}>{(flag, _) =>
            <StudyFlag flag={flag} showDescription={showDescription} />
          }</For>

        }>
          <For each={(flags as Flag[]).filter((value) => {
            if (value.continent == continent()) {
              return value
            }
          })}>{(flag, _) =>
            <StudyFlag flag={flag} showDescription={showDescription} />
            }</For>


        </Show>
      </div>
    </div>

  )
}
