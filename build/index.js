"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sorter_1 = require("./Sorter");
const NumbersCollection_1 = require("./NumbersCollection");
const CharactersCollectiobn_1 = require("./CharactersCollectiobn");
const numbersCollection = new NumbersCollection_1.NumbersCollection([
    10, -2, 3, 4, -10, 1000, -1000,
]);
const characterCollection = new CharactersCollectiobn_1.CharactersCollection("Xgdcaqshcdguiopq");
const sorter = new Sorter_1.Sorter(numbersCollection);
const sorter2 = new Sorter_1.Sorter(characterCollection);
sorter.sort();
sorter2.sort();
console.log(numbersCollection.data, characterCollection.data);
