let Person = class {
	constructor(mass, height) {
		this.mass = mass;
		this.height = height;
	}

	// getter = invoker
	get bmi() {
		return this.computeBMI();
	}

	//method
	computeBMI() {
		return this.mass / this.height ** 2;
	}
};

const mark = new Person(78, 1.69);
const john = new Person(92, 1.95);

console.log(`Mark's mass:  ${mark.mass} | height: ${mark.height} | BMI: ${mark.bmi} `);
console.log(`John's mass:  ${john.mass} | height: ${john.height} | BMI: ${john.bmi} `);
