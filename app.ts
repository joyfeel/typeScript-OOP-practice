interface test {
	foo(name)
}


class Animal implements test{
	foo(name) {
		console.log('12313');
	}
	constructor(public name: String) {}
	move (meters: number) {

		console.log(this.name + ' moved' + meters + 'm.' );
	}
}

class Dog extends Animal {
	constructor(name: string) { 
		super(name); 
	}
	move () {
		console.log('Barking');
		super.move(50);
	}
}

class Cat extends Animal {
	constructor(name: string) {
		super(name);
	}
	move() {
		console.log('Meowing');
		super.move(20);
	}
}

let smallWhite = new Dog('smallWhite');
let mimi = new Cat('mimi');
