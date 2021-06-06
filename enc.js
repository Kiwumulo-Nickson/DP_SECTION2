

var firstname = "firstNamePar"
var lastname = "lastNamePar"


class Person {
    //data
    // constructor (){
    //     this.firstname ="John"
    //     this.lastname ="Doe"
    // }
    constructor (firstNamePar,lastNamePar){
        this.firstname =firstNamePar
        this.lastname =lastNamePar
    }
    //operators/methods

    fullName(){
        return this.firstname + "" + this.lastname
    };

}

// start creating people
let person1 = new Person("John","Doe");
console.log(person1.firstname);
console.log(person1.lastname);
console.log(person1.fullName());

let person2 = new Person("Christine","Kent");
console.log(person2.firstname);
console.log(person2.lastname);
console.log(person2.fullName());

let person3 = new Person("Nickson","Kiwumulo");
console.log(person3.firstname);
console.log(person3.lastname);
console.log(person3.fullName());

