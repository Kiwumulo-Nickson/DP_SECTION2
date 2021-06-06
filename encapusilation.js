
var breed = "breedArg"
var color = "colorArgr"
var barking_sound = "barking_soundArg"



class Dog{

    constructor (breedArg,colorArg,barking_soundArg){
        this.breed=breedArg;
        this.color=colorArg;
        this.barking_sound=barking_soundArg;
    
    
    }

    bark () {
        // console.log(this.barking_sound);
        return  this.barking_sound
    }


};

let dog1 = new Dog("Germany Shephered","black","whoof")
console.log( dog1.breed);
console.log( dog1.color);
console.log( dog1.bark());

let dog2 = new Dog("French Bulldog","black","whoof whoof")
console.log( dog2.breed);
console.log( dog2.color);
console.log( dog2.bark());

let dog3 = new Dog("Golden Retriever","black","whoof whoof whoof")
console.log( dog3.breed);
console.log( dog3.color);
console.log( dog3.bark());
        //  console.log(dog.barking_sound);
         // let dog2 = new dog("French Bulldog","black","whoof whoof")
// let dog3 = new dog("Golden Retriever","black","whoof whoof whoof")


// dog.bark()
// dog2.bark()
// dog3.bark()