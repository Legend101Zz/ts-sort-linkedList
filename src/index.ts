import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";

const numbersCollection = new NumbersCollection([
  10, -2, 3, 4, -10, 1000, -1000,
]);

const sorter = new Sorter(numbersCollection);

sorter.sort();
console.log(numbersCollection.data);
