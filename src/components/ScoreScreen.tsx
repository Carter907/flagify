import { Show } from 'solid-js'
import { BiRegularHappyBeaming } from 'solid-icons/bi'
import { ImSad } from 'solid-icons/im'
interface ScoreScreenProps {
  score: number,
  total: number,
}
export default function ScoreScreen({ score, total }: ScoreScreenProps) {
  return (<div>
    <Show when={score / total > .70} fallback={
      <div class="inline">
        <ImSad size={60} /> You may need to study more..
      </div>
    }>
      <div class="inline">
        <BiRegularHappyBeaming size={60} /> Yay you passed!
      </div>
    </Show>
    <div class="text-2xl">
      You scored {score} out of {total}
    </div>

  </div>)
}
