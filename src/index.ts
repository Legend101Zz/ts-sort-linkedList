import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollectiobn";
import { LikedList } from "./LinkedList";

const numbersCollection = new NumbersCollection([
  10, -2, 3, 4, -10, 1000, -1000,
]);

const characterCollection = new CharactersCollection("Xgdcaqshcdguiopq");

const linkedList = new LikedList();

linkedList.add(500);
linkedList.add(10);
linkedList.add(-900);
linkedList.add(1);

const sorter = new Sorter(numbersCollection);

const sorter2 = new Sorter(characterCollection);
const sorter3 = new Sorter(linkedList);

sorter.sort();
sorter2.sort();
sorter3.sort();
console.log(numbersCollection.data, characterCollection.data);
linkedList.print();
