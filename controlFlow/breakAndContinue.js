////------------------BREAK(Exits a loop)------------------////

for (let i = 0; i < 5; i++) {
    if (i === 3) {
        break;  // Loop stops when i equals 3
    }
    console.log(i);
}

////-----------------CONTINUE(Skips the current iteration and moves to the next one.)--////

for (let i = 0; i < 5; i++) {
    if (i === 3) {
        continue;  // Skips the iteration when i equals 3
    }
    console.log(i);
}
