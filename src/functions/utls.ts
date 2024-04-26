import { Cringe } from "../models/Cringe.model";

export const makeCringe = (cringe: Cringe) => {
    return {
        id: cringe.id,
        title: cringe.title,
        description: cringe.description,
        image: cringe.image,
        date: cringe.date,
    };
}