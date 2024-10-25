////-----------------IF STATEMENTS----------------////

let num1 = 5;
if (num1 > 0) {
    console.log("Positive number");
}

////-----------------IF ELSE STATEMENTS-------------////

let num2 = -1;
if (num2 > 0) {
    console.log("Positive number");
} else {
    console.log("Negative number");
}

////----------------ELSE IF LADDER------------------////

let num3 = 0;
if (num3 > 0) {
    console.log("Positive number");
} else if (num3 < 0) {
    console.log("Negative number");
} else {
    console.log("Zero");
}


////----------------SWITCH------------------------////

let day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Invalid day");
}


