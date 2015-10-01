'use strict';

interface FlyBehavior {
	fly(): void;
}

class FlyWithWings implements FlyBehavior {	
	fly(): void {
		console.log('I\'m flying');
	}
}

class FlyNoWay implements FlyBehavior {
	fly(): void {
		console.log('I can\'t fly');
	}
}

class FlyRocketPowered implements FlyBehavior {
	fly(): void {
		console.log('I can flying with rocket');
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
	constructor(private flyBehavior: FlyBehavior, private quackBehavior: QuackBehavior) {
		/*
		 *	Syntax sugar for constructor
		 *
		 *	private flyBehavior: FlyBehavior;
		 *	private quackBehavior: QuackBehavior
		 *		 
		 *	constructor(fb: FlyBehavior, private qb: QuackBehavior) {
		 *		this.flyBehavior = fb;
		 *		this.quackBehavior = qb;
		 *	}
		 */
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
	setFlyBehavior(fb: FlyBehavior): void {
		this.flyBehavior = fb;
	}
	setQuackBehavior(qb: QuackBehavior): void {
		this.quackBehavior = qb;
	}
}

class MallardDuck extends Duck {
	constructor() {
		super(new FlyWithWings(), new Quack());
	}
	display(): void {
		console.log('I\'m a real Mallard Duck');
	}
}

class ModelDuck extends Duck {
	constructor() {
		super(new FlyNoWay(), new Quack());
	}
	display(): void {
		console.log('I\'m a real Mallard Duck');
	}
}

let mallard: Duck = new MallardDuck();
mallard.performQuack();
mallard.performFly();

let model: Duck = new ModelDuck();
model.performFly();
model.setFlyBehavior(new FlyRocketPowered());
model.performFly();