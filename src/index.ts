import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";

import { CharactersCollection } from "./CharactersCollectiobn";

const numbersCollection = new NumbersCollection([
  10, -2, 3, 4, -10, 1000, -1000,
]);

const characterCollection = new CharactersCollection("Xgdcaqshcdguiopq");

const sorter = new Sorter(numbersCollection);

const sorter2 = new Sorter(characterCollection);

sorter.sort();
sorter2.sort();
console.log(numbersCollection.data, characterCollection.data);
