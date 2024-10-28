////----------------PROMISE-----------////
let myPromise = new Promise((resolve,reject)=>{
    let success = true;
    if(success){
        resolve('Successfull')
    }else{
        reject('Failed')
    }
})

myPromise.then((response)=>{
    console.log(response);
    
}).catch((error)=>{
    console.log(error);
    
})// output: Successfull

////------------PROMISE TYPES -------------////

let promise1 = new Promise((res,rej)=>{
    let success = false;
    if(success){
        res('Successfull')
    }else{
        rej('Failed')
    }
})

let promise2 = new Promise((res,rej)=>{
    let success = true;
    if(success){
        res('Successful')
    }else{
        rej('Failed')
    }
})

///------------PROMISE.ANY

Promise.any([promise1,promise2]).then((response)=>{
    console.log(response);
    
}).catch((error)=>{
    console.log(error);
    
})// output: Successfull

///---------------PROMISE.ALLSETTLED

Promise.allSettled([promise1,promise2]).then((response)=>{
    console.log(response);
    
}).catch((error)=>{
    console.log(error);
})// output: [{ status: 'rejected', reason: 'Failed' },{ status: 'fulfilled', value: 'Successful' }]


///------------PROMISE.RACE

Promise.race([promise1,promise2]).then((response)=>{
    console.log(response);
    
}).catch((error)=>{
    console.log(error);
})// output: Failed

///------------PROMISE.ALL

Promise.all([promise1,promise2]).then((response)=>{
    console.log(response);
    
}).catch((error)=>{
    console.log(error);
    
})// output: Failed


////-----------PROMISE.REJECT

let login = (userName,password)=>{
    let storedName = 'John'
    let storedPassword = 'John123'
    if(storedName !== userName){
       return  Promise.reject('User name is incorrect')
    }else if(password !== storedPassword){
       return Promise.reject('Password is incorrect')
    }else {
        return Promise.resolve('Login successfull')
    }
}
login('John','wrongPassword')
.then(message=>{
    console.log(message);
    
})
.catch((error)=>{
    console.log(error);// output:Password is incorrect
})
