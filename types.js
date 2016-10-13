console.log(![1]); // boolean
console.log(+[] === 0); // number
console.log([] + [] === ""); // string

console.log("deema"[1] === "e");
console.log(+("2" + "1") === 21);
console.log(+!![] === 1);
console.log((![]+[])[+!![]] === "a");
console.log([][[]] + [] === "undefined");

console.log([2,1,7]["sort"]());
console.log((12)["toString"](2) === "1100");
console.log((35)["toString"](36) === "z");