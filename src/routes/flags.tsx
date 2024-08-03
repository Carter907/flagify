import StudyFlag from '../components/StudyFlag'
import flags from '../flags.json';
import { For, createSignal } from 'solid-js';
export default function Home() {
  const [showDescription, setShowDescription] = createSignal(true);

  return (
    <div class="flex gap-4">
      <div>

        <button id="show-description" class="hover:bg-neutral-100 dark:hover:bg-neutral-800 border p-2 rounded-full" onclick={() => { setShowDescription(!showDescription()) }}>description</button>
      </div>
      <div class="grid grid-cols-3 gap-4">

        <For each={flags}>{(flag, _) =>
          <StudyFlag flag={flag} showDescription={showDescription} />
        }</For>

      </div>
    </div>

  )
}
