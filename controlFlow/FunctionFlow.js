////------------Function as flow control-----------///

function getDayName(day) {
    if (day === 1) return "Monday";
    else if (day === 2) return "Tuesday";
    else return "Invalid day";
}

console.log(getDayName(1));  // Outputs "Monday"
