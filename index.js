class PersonClass {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    printDetails = () => {
        console.log(`Name: ${this.name}, Age: ${this.age}, Gender: ${this.gender}`);
    }
}

const person1 = new PersonClass("Atharva", 20, "Male");
person1.printDetails(); 

function PersonConstructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;

    this.printDetails = () => {
        console.log(`Name: ${this.name}, Age: ${this.age}, Gender: ${this.gender}`);
    }
}

const person2 = new PersonConstructor("Sak", 25, "Female");
person2.printDetails();  


const personLiteral = {
    name: "Rahul",
    age: 40,
    gender: "Male",

    printDetails: function() {
        console.log(`Name: ${this.name}, Age: ${this.age}, Gender: ${this.gender}`);
    }
};

personLiteral.printDetails(); 

const Personobjcons = new Object();
    Personobjcons.name="Anish"
    Personobjcons.age=60;
    Personobjcons.weight=70;
    Personobjcons["height"]=4.9
    Personobjcons.getFunction = function(){
        return "Name: "+this.name+" Age: "+this.age+" Weight: "+this.weight+" Height: "+this.height;
    }

console.log(Personobjcons.getFunction());
Personobjcons.location="Mumbai"
console.log(Personobjcons.location);


const nonMemberArrowFunction = (name, age, gender) => {
    console.log(`Name: ${name}, Age: ${age}, Gender: ${gender}`);
}

nonMemberArrowFunction("Karn", 27, "Female");  
