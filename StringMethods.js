let text = 'Hello';
let text1 = 'Java Script';
let text2 = '      Welcome';
let text3 = 'Hai    '
let text4 = '   one   '
let text5 = 'a,b,c,d'

////---------LENGTH

console.log(text.length); //output: 5

////---------CHARACTER ACCESS

console.log(text.charAt(2)); //output: 'l'
console.log(text.charCodeAt(2));//output: 108
console.log(String.fromCharCode(65))// output: A 

////---------STRING MANIPULATION

console.log(text.concat(text1)); //output: HelloJava Script
console.log(text1.includes('Java'));// output: true
console.log(text1.endsWith('a'));// output: false
console.log(text1.startsWith('J'));// output: true

////-----------SEARCHING

console.log(text.indexOf('e'));//output: 1
console.log(text1.lastIndexOf('a'));//output: 3
console.log(text1.search('J'));//output: 0

////---------------EXTRACTION

console.log(text1.slice(0,3));//output: Jav
console.log(text1.substring(0,3));//output: Jav


////----------------REPLACEMENT

console.log(text.replace('ello','ai'));//output: Hai
console.log(text1.replaceAll('a', 'e'));//output: Jeve Script


////--------------- CASE MANIPULATION

console.log(text.toLowerCase());// output: hello
console.log(text.toUpperCase());// output: HELLO
console.log(text2.trimStart());// output: Welcome
console.log(text3.trimEnd());// output: Hai
console.log(text4.trim()); // output: one


////---------------SPLITTING AND JOINING

let a = text5.split(',')
console.log(a);//output: ['a','b','c','d']
console.log(a.join(''));//output: abcd
console.log(a.join(','));//output: a,b,c,d
















