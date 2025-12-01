//complete this code
class Person {
	constructor(name: string, age: number){
		this.name = name;
		this.age = age;
	}

	get name(){
		return this.name;
	}

	set age(age:number){
		this.age = age;
	}
}

class Student extends Person {
	super(name: string, age: number);
	study(){
		return this.name + " is studying";
	}
}

class Teacher extends Person {
	super(name: string, age: number);
	teach(){
		return this.name + " is teaching"
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
