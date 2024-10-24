//-------------CURRYING--------------//

function add(a){
    return function(b){
        return function(c){
          console.log(a+b+c);
          
        }
    }
}

add(2)(3)(4)