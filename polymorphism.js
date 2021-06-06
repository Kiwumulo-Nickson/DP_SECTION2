class Animal{
    constructor(name){
        this.name=name
    }
    eats(){
        console.log(this.name + 'eats food')
    }
}

class Predator extends Animal{
    eats(){
        super.eats()
        console.log(this.name + 'eats food')
    }
}

let lions = new Predators('lions')
lions.eats()