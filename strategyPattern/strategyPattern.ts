'use strict';

interface FlyBehavior {
	fly(): void;
}

class FlyWithWings implements FlyBehavior {	
	fly(): void {
		console.log('I\'m flying!!!');
	}
}

class FlyNoWay implements FlyBehavior {
	fly(): void {
		console.log('I can\'t fly');
	}

}

interface QuackBehavior {
	quack(): void;
}

class Quack implements QuackBehavior {
	quack(): void {
		console.log('Quack');
	}
}

class MuteQuack implements QuackBehavior {
	quack(): void {
		console.log('<<Slience>>');
	}
}

class Squeak implements QuackBehavior {
	quack(): void {
		console.log('Squeak');
	}
}

abstract class Duck {
	flyBehavior: FlyBehavior;
	quackBehavior: QuackBehavior;
	constructor () {

	}
	abstract display(): void;
	performFly(): void {
		this.flyBehavior.fly();
	}
	performQuack(): void {
		this.quackBehavior.quack();
	}
	swim(): void {
		console.log('All ducks float, even decoys!');
	}
}


