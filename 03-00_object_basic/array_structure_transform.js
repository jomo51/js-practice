const nestedMessages = [
  ["Hello", "World"],
  ["This", "is", "JavaScript"],
  ["Array", ["Flatten", ["Deep"]]]
];

const arr1 = [1, 2];
const arr2 = [3, [4, 5]];
const arr3 = [6, [7, [8, 9]]];

//Part1:flat()
//1段階表示
console.log(nestedMessages.flat(1));
//全段階表示
console.log(nestedMessages.flat(Infinity));

//Part2:concat()
//1段階表示
console.log(arr1.concat(arr2,arr3));
//全段階表示
console.log(arr1.concat(arr2.flat(Infinity),arr3.flat(Infinity)));