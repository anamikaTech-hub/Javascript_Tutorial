//-----------------------------//

let details = {
    name: 'Anamika',
    age: 21,
    print:function(){
        console.log('Name:',this.name,'   Age:',this.age);
        
    }
}

details.print();// output: Name: Anamika   Age:21

let details2 ={
    name: 'John Doe',
    age: 34
}

function printDetails(Hometown,state){
    console.log('Name:',this.name,',Age:',this.age,',Hometown:',Hometown,',State:',state);
}

//-----------------------CALL

details.print.call(details2);// output: Name: John Doe   Age: 34

printDetails.call(details,'Tanur','Malappuram');// output: Name: Anamika ,Age: 21 ,Hometown: Tanur ,State: Malappuram


//-----------------------APPLY

details.print.apply(details2);// output: Name: John Doe   Age: 34
printDetails.apply(details,['Tanur','Malappuram'])// output: Name: Anamika ,Age: 21 ,Hometown: Tanur ,State: Malappuram

//------------------------BIND

let printing = printDetails.bind(details,'Tanur','Malappuram');
printing();// output: Name: Anamika ,Age: 21 ,Hometown: Tanur ,State: Malappuram