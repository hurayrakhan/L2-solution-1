class person{
    name: string;
    age: number;
    gender : string;

    constructor(namme: string, age: number, gender: string){
        this.name = namme;
        this.age = age;
        this.gender = gender;
    }

    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}, Gender: ${this.gender}`;
    }
};

class student extends person{
    grade: string;

    constructor(name: string, age: number, gender: string, grade: string){
        super(name, age, gender);
        this.grade = grade;
    }

    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}, Gender: ${this.gender}, Grade: ${this.grade}`;    
        
    }

};

const student1 = new student("Alice", 20, "Female", "A");
console.log(student1.getDetails());