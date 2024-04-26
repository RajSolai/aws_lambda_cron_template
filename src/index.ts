import { makeCringe } from "./functions/utls";
import { Cringe } from "./models/Cringe.model";

export const handler = async (event: any) => {

  const newCringe: Cringe = makeCringe({
    id: 1,
    title: 'title',
    description: 'description',
    image: 'image',
    date: 'date',
  });

  // Your code here
  console.log('Hello world');

  console.log({ newCringe });
}