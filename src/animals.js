class Animal {
	constructor(name = 'no-name') {
		this.name = typeof name === 'string' ? name : 'no-name';
		this.elevel = 0;
		Animal.prototype.collection.push(this);
	}
	eat(food = 'fish') {
		this.elevel += 5;
	}
	sleep() {
		this.elevel += 10;
	}
	play() {
		return null;
	}
	randomact() {
		// BONUS method
		var acts = ['eat','sleep','play','emitsound'];
		var rnum = Math.floor((Math.random() * 4));
		console.log('random act is', acts[rnum]);
		this[acts[rnum]]();
			
	}
	static soundoff() {
		console.log(`\nSOUND OFF!\n`);
		console.log(`There are ${Tiger.prototype.count} tigers.`);
		console.log(`There are ${Monkey.prototype.count} monkeys.`);
		console.log(`There are ${Snake.prototype.count} snakes.`);
		Animal.prototype.collection.map((animal) => {
			console.log(`${animal.name} says:`);
			animal.emitsound();
			console.log(`${animal.name}'s energy level is ${animal.elevel}.`);
		});
	} 
	// used for console testing only
	report() {
		console.log(`${this.name}'s energy level is ${this.elevel}.`);
	}
}

class Tiger extends Animal {
	constructor(name) {
		super(name);
		Tiger.prototype.count++;
	}
	emitsound() {
		console.log(Tiger.prototype.sound);
		this.elevel -= 3;
	}
	eat(food = 'fish') {
		(food !== 'grain') ? this.elevel += 5 : console.log(`actually grain makes ${this.name} sick!`);
		} 
	sleep() {
		this.elevel += 5;
	}
	// used for console testing only
	report() {
		super.report();
		console.log(`there are ${Tiger.prototype.count} tigers.`)
	}
}

class Monkey extends Animal {
	constructor(name) {
		super(name);
		Monkey.prototype.count++;
	}
	emitsound() {
		console.log(Monkey.prototype.sound);
		this.elevel -= 4;
	}
	eat(food = 'fish') {
		this.elevel += 2;
	}
	play() {
		if (this.elevel >= 8) {
			this.elevel -= 8;
			console.log('Oooo Oooo Oooo');
		} else {
			console.log(`${this.name} the monkey is too tired.`);
		}
	}
	// used for console testing only
	report() {
		super.report();
		console.log(`there are ${Monkey.prototype.count} monkeys.`)
	}
}

class Snake extends Animal {
	constructor (name) {
		super(name);
		Snake.prototype.count++;
	}
	emitsound() {
		console.log(Snake.prototype.sound);
		this.elevel -= 3;
	}
	// used for console testing only
	report() {
		super.report();
		console.log(`there are ${Snake.prototype.count} snakes.`)
	}
}
Animal.prototype.collection = [];
Tiger.prototype.count = 0;
Tiger.prototype.sound = 'ROAARRRRR!';
Monkey.prototype.count = 0;
Monkey.prototype.sound = 'EEEIIIIEEEIIII!';
Snake.prototype.count = 0;
Snake.prototype.sound = 'HIISSSSSSS!';

module.exports = {
	Animal: Animal,
	Tiger: Tiger,
	Monkey: Monkey,
	Snake: Snake
}

//Tigers test
/* var mikethetiger = new Tiger('Mike');
mikethetiger.sleep();
mikethetiger.eat('fish');
mikethetiger.eat('grain');
mikethetiger.report();
var bobthetiger = new Tiger('Bob');
bobthetiger.emitsound();
bobthetiger.report();

//Monkeys test
var charliethemonkey = new Monkey('Charlie');
charliethemonkey.sleep();
charliethemonkey.eat('bugs');
charliethemonkey.report();
var sammythemonkey = new Monkey('Sammy');
sammythemonkey.sleep();
sammythemonkey.eat('bugs');
sammythemonkey.report();
var timmythemonkey = new Monkey('Timmy');
timmythemonkey.sleep();
timmythemonkey.sleep();
timmythemonkey.eat('meat');
timmythemonkey.emitsound();
timmythemonkey.report();

//Snakes test
var petethesnake = new Snake('Pete');
petethesnake.sleep();
petethesnake.emitsound();
petethesnake.eat('fish');
petethesnake.report();
var scottthesnake = new Snake('Scott');
scottthesnake.sleep();
scottthesnake.report();
var conniethesnake = new Snake('Connie');
conniethesnake.sleep();
conniethesnake.emitsound();
conniethesnake.eat('fish');
conniethesnake.report();

//Sound Off!
Animal.soundoff(); 

//Bonus
var mikethetiger = new Tiger('Mike');
mikethetiger.sleep();
mikethetiger.eat('fish');
mikethetiger.eat('grain');
mikethetiger.play();
mikethetiger.report();
mikethetiger.randomact();
mikethetiger.randomact();
mikethetiger.randomact();
mikethetiger.randomact(); */



