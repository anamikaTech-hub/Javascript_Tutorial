
///-------------------Generator Function-------------///

function* numberGenerator(){
    console.log('Start of generator');
    yield 1;
    yield 2;
    yield 3;
    console.log('End of generator');
}

let gen = numberGenerator();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());

// output:
// Start of generator
// { value: 1, done: false }
// { value: 2, done: false }
// { value: 3, done: false }
// End of generator
// { value: undefined, done: true }
