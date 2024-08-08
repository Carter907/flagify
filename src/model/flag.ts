export default interface Flag {
  name: string,
  description: string,
  continent: Continent,
  img: string,
}

export type Continent = "Africa" | "North America" | "South America" | "Antartica" | "Oceania" | "Asia" | "Europe";
