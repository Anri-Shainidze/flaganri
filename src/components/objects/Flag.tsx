export type Flag = {
  name: string;
  population: string;
  region: string;
  capital: string;
  subRegion: string;
  currencie: string;
  domain: string;
  languages: string;
  img:string
};
const forallflags: Array<Flag> = [
  {
    name: "",
    population: "",
    subRegion: "",
    region: "",
    domain: "",
    capital: "",
    currencie: "",
    languages: "",
    img:""
  },
];


// Example of how to add a flag object to the array
console.log(forallflags)
