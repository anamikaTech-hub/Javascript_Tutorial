////--------- 1.FUNCTION EXPRESSION

const myFunction1 = function(){
    //function body
};

////--------- 2.FUNCTION DECLARATION

function myFunction2(){
        //function body
};

////--------- 3.ANONYMOUS FUNCTION

const anonymousFunction = function(){
    //function body
};

////----------4.NAMED FUNCTION EXPRESSION

const myFunction3 = function namedFunction(){
    //function body
};

////-------------FUNCTION COMPOSITION

function double(num){
    return num*2
}

function addFive(num){
    return num+5
}

let result = double(addFive(2))// output: 14
console.log(result)

////------------ SCOPE AND LEXICAL SCOPE

let globalVar = 'I am global';

function outerFunction(){
    let outerVar = 'I am in outer function';
    function innerFuction(){
        let innerVar = 'I am in inner function';

        console.log(globalVar); //output:'I am global'
        console.log(outerVar); //output: 'I am in outer function'
        console.log(innerVar); //output: 'I am in inner function'
        
    }
    innerFuction();
    // console.log(innerVar); // output: Reference Error
    outerVar = 'I am redefined in outer function'
}

outerFunction();
// console.log(innerVar); //output: Reference Error
// console.log(outerVar); // output: Reference Error

console.log(globalVar);


////------------ CLOSURE

function outer(){
    let a = 10;
    function inner(){
        console.log(a);
        
    }
    return inner;
}

outer()();

////---------------- HOISTING

console.log(x);// output: undefined
x = 10
console.log(x); // output: 10
greet() // output: 'Hello'
var x
function greet(){
    console.log('Hello');
}


