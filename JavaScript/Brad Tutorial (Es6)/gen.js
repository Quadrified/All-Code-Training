function *g1() {
  console.log("Hello");
  yield "YIELD 1";
  console.log("World");
  yield "YIELD 1";
}

let g = g1;

console.log(g.next().value);
