// Store values in key and value pairs

let stud = {
    Name: "Abi",
    Age : 28,
    City: "Delhi",
};

// console.log(stud);

let person = {
    name : "rahul",
    age : 25,
    greet : function() {
        console.log("Hello," + this.name);
    }
}

// person.greet()

// dynamic value in string ` `


class car{
    constructor (brand,model){

        //initialize value to that parameter 
        this.brand = brand;
        this.model =model;
    }
   //function and template 
    showDetails(){ 
        console.log(`Car :  ${this.brand} ${this.model}`);
    }
}

//now passing object as new keyword     
let car1 = new car ("tesla","Model 2");

car1.showDetails();
// this keyword - should run inside the code


Prototype method -- shared method

// class - blueprint for object 