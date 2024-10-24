//Print from 10 to 1 with 1 second delay by using generator function

function* generator(){
    for(let i = 10;i>0;i--){
        yield i;
    }
}

let gen = generator()

let printNext = ()=>{
    let next = gen.next()

    if(next.done){
        console.log('Count completed');
        
    }else{
        console.log(next.value);
        setTimeout(printNext,1000)
    }
}

printNext()