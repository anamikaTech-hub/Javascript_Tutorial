// Find the third smallest element of an array using only reduce


let arr = [1,21,3,61,3,2,4,7,3,5,4,44,]

const thirdSmallest = (arr)=>{
    let output = arr.reduce((acc,curr)=>{
        if(!acc.includes(curr)){
            acc.push(curr)
        }

        if(acc.length>3){
            acc.sort((a,b)=>a-b);
            acc.pop()
        }
        return acc
    },[])

    return output[output.length-1]
}

console.log(thirdSmallest(arr));
