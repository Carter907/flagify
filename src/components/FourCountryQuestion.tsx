import { For } from "solid-js"
import { Accessor } from 'solid-js'
import Flag from "../model/flag"
import FourCountryQuestionData from "~/model/fourCountryQuestion"

interface FourCountryQuestionProps {
  questionData: Accessor<FourCountryQuestionData>,
  onAnswer: (flag: Flag) => void,
  answerMessage: Accessor<string>,
}


export default function FourCountryQuestion({ questionData, onAnswer, answerMessage }: FourCountryQuestionProps) {

  return (
    <div class="flex flex-row">


      <div class="p-2 border rounded basis-1/2">
        <img class="w-96 shadow-md border" src={questionData().correctFlag.img}></img>

        <div class="grid grid-cols-2 gap-2 py-2">
          <For each={questionData().choices}>{(flag, _) =>
            <button class="p-2 border rounded" onclick={() => {
              onAnswer(flag)
            }}>
              {flag.name}
            </button>
          }</For>

        </div>

        {answerMessage()}
      </div>
    </div>

  )
}


