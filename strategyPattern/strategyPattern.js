'use strict';
var FlyWithWings = (function () {
    function FlyWithWings() {
    }
    FlyWithWings.prototype.fly = function () {
        console.log('I\'m flying!!!');
    };
    return FlyWithWings;
})();
var FlyNoWay = (function () {
    function FlyNoWay() {
    }
    FlyNoWay.prototype.fly = function () {
        console.log('I can\'t fly');
    };
    return FlyNoWay;
})();
var Quack = (function () {
    function Quack() {
    }
    Quack.prototype.quack = function () {
        console.log('Quack');
    };
    return Quack;
})();
var MuteQuack = (function () {
    function MuteQuack() {
    }
    MuteQuack.prototype.quack = function () {
        console.log('<<Slience>>');
    };
    return MuteQuack;
})();
var Squeak = (function () {
    function Squeak() {
    }
    Squeak.prototype.quack = function () {
        console.log('Squeak');
    };
    return Squeak;
})();
var Duck = (function () {
    function Duck() {
    }
    Duck.prototype.performFly = function () {
        this.flyBehavior.fly();
    };
    Duck.prototype.performQuack = function () {
        this.quackBehavior.quack();
    };
    Duck.prototype.swim = function () {
        console.log('All ducks float, even decoys!');
    };
    return Duck;
})();
