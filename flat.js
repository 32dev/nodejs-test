let myList = ['c', 'c#', 'd', 'd#', 'e', 'f', 'f#', 'g', 'g#', 'a', 'a#', 'b'];
let myList2 = Array.from({ length: 2 }, () => myList).flat();
console.log(myList2);