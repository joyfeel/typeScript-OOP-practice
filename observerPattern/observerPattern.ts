interface Subject {
	registerObserver(o: Observer): void;
	removeObserver(o: Observer): void;
	notifyObservers(): void;
}

interface Observer {
	update(temp: number, humudity: number, pressure: number): void;
}

interface DisplayElement {
	display(): void;
}

class WeatherData implements Subject {
	//private observers: Array<Observer>; 
	private observers;

	constructor(argument) {
		this.observers = 
	}
	registerObserver(o: Observer): void {

	}
	removeObserver(o: Observer): void {

	}
	notifyObservers(): void {

	}
}