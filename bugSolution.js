function foo(a,b){return Number(a) + Number(b);}
console.log(foo(1, "2")); // Output: 3 (Correct numerical addition)
console.log(foo(1,2)); //Output 3
console.log(foo("1","2")); // Output: 3