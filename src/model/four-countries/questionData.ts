import Flag from '../flag'
import { QuizSettings } from '~/model/quiz'

export default interface QuestionData {
  choices: Flag[],
  correctFlag: Flag
}


export function getFourCountryList(settings: QuizSettings, list: Flag[]): QuestionData[] {

  let filteredList = list.filter((value) => {
    if (value.continent === settings.continent) {
      return value
    }
  }).map((value, _, flags) => {
    let choices: Flag[] = []
    for (let i = 0; i < 3; i++) {
      let randomChoice;
      do {
        randomChoice = flags[Math.floor(Math.random() * flags.length)] as Flag
      } while (choices.indexOf(randomChoice) != -1 || randomChoice === value);
      choices.push(randomChoice)
    }
    choices.push(value);
    choices.toSorted(() => (Math.random() * 2) - 1);
    const questionData: QuestionData = {
      correctFlag: value,
      choices: choices,
    }
    return questionData

  }).toSorted(() => (Math.random() * 2) - 1);



  return filteredList;
}
