import StudyFlag from '~/components/StudyFlag';
import flags from '../flags.json';
import { For } from 'solid-js';
export default function Home() {


  return (
    <div class="grid grid-cols-3 p-2 gap-2">

      <For each={flags}>{(flag, _) =>
        <StudyFlag flag={flag} />
      }</For>

    </div>
  )
}
