function Employee(name,age,baseSalary){
    this.name = name;
    this.age = age;
    this.baseSalary = baseSalary;
//monthly bonus made private to employee fuction
let monthlyBonus = 1000;
//calculating final salary abstraction

let calculateFinalSalary = function(){
    let finalSalary =baseSalary + monthlyBonus
    console.log('Final Salary is :'+ finalSalary);
}
this.getEmpDetails = function(){
    console.log('Name :' +this.name + '|Age :' + this.age);
    calculateFinalSalary()
}
}

let emp1= new Employee('John',30,2000);
emp1.getEmpDetails();
