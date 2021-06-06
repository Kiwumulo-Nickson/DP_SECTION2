class Person {
    //data
    constructor (){
        this.firstname
        this.lastname
        this.firstname
        this.lastname 
       }

// operators

//overiding  demostration
    talk(){
        console.log("I talk as a person")
    }
    // eat()
    // walk()

};
// 21,22& 23 represent principle of inheritance
class Man extends Person {
    constructor(){
        super();
    }

//overiding  demonstration
    talk(){
        console.log("I talk as a man")
    }

    
}
// class Woman extends Person {}

//polymorphism illustration
let person =new Person();
person = new  Man;
// person = new  Woman;

//check point for where all the methods/operators will be auto displayed as methods/oper
// let person =new Person();
//person.