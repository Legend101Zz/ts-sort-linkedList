class Sorter {
  constructor(public collection: number[]) {}

  sort(): void {}
}

const sorter = new Sorter([10, -2, 3, 4, -10, 0]);

sorter.sort();

console.log(sorter.collection);
