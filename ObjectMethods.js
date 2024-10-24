////////---------------FREEZE--------------///////////////

const details = {
    Name: 'Anamika',
    Age: 21
};

Object.freeze(details);
console.log(Object.isFrozen(details));//output: true
details.Place = 'America'
console.log(details.Place);// output: undefined
details.Name = 'Nothing';
console.log(details.Name);// output: Anamika

////////-------------SEAL----------------///////////

const person = {
    Name: 'John Doe',
    Age: 25
};

Object.seal(person);
console.log(Object.isSealed(person));// output: true
person.Place = 'America'
console.log(person.Place);// output: undefined
person.Name = 'Nothing'
console.log(person.Name);// output: Nothing




