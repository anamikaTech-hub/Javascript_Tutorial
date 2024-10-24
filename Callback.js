///------------------CALL BACK------------////

 function greeting(name,callback){
    console.log(`Hello, ${name}`);
    callback();
 }

 function goodBye(){
    console.log('Good bye!'); 
 }

 greeting('Anamika',goodBye)//output: 'Hello, Anamika'  'Good bye'


 /////---------------CALLBACK HELL-------////

 setTimeout(() => {
    console.log('First');
    setTimeout(() => {
        console.log('Second');
        setTimeout(() => {
            console.log('Third');
            
        }, 1000);
    }, 1000);
 }, 1000); // output: 'First'  'Second' 'Third'