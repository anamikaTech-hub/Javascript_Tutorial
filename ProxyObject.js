

let target = {
    message:'Hello'
}

let handler = {
    get:function(target,prop){
        return prop in target ? target[prop] : `Property ${prop} does not exist`;
    },

    set: function(target,prop,value){
        if(prop === 'message'){
            console.log(`Message is being updated to:${value}`);
            
        }
        target[prop] = value
    }

}

let proxy = new Proxy(target,handler)

console.log(proxy.message);
console.log(proxy.nonProp);
proxy.message = 'Hai'

