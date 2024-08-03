export default interface Quiz {
  name: string,
  path: string,
  description: string,
  amount: number,
  time: Time
  continent: string,
}

export type Time = 0 | 1 | 2;
