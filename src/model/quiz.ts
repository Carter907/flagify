import { Continent } from "./flag";

export default interface Quiz {
  name: string,
  path: string,
  description: string,

}

export type Time = 0 | 1 | 2;

export interface QuizSettings {
  amount: number,
  time: Time
  continent: Continent
}
