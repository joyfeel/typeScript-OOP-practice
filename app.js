var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Animal = (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.foo = function (name) {
        console.log('12313');
    };
    Animal.prototype.move = function (meters) {
        console.log(this.name + ' moved' + meters + 'm.');
    };
    return Animal;
})();
var Dog = (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        _super.call(this, name);
    }
    Dog.prototype.move = function () {
        console.log('Barking');
        _super.prototype.move.call(this, 50);
    };
    return Dog;
})(Animal);
var Cat = (function (_super) {
    __extends(Cat, _super);
    function Cat(name) {
        _super.call(this, name);
    }
    Cat.prototype.move = function () {
        console.log('Meowing');
        _super.prototype.move.call(this, 20);
    };
    return Cat;
})(Animal);
var smallWhite = new Dog('smallWhite');
var mimi = new Cat('mimi');
var button = document.createElement('button');
button.textContent = "Say Hello";
button.onclick = function () {
    alert('Meow!!!!');
};
document.body.appendChild(button);
