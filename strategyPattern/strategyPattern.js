'use strict';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var FlyRocketPowered = (function () {
    function FlyRocketPowered() {
    }
    FlyRocketPowered.prototype.fly = function () {
        console.log('I can flying with rocket');
    };
    return FlyRocketPowered;
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
    function Duck(flyBehavior, quackBehavior) {
        this.flyBehavior = flyBehavior;
        this.quackBehavior = quackBehavior;
        console.log('Duck constructor!');
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
    Duck.prototype.setFlyBehavior = function (fb) {
        this.flyBehavior = fb;
    };
    Duck.prototype.setQuackBehavior = function (qb) {
        this.quackBehavior = qb;
    };
    return Duck;
})();
var MallardDuck = (function (_super) {
    __extends(MallardDuck, _super);
    function MallardDuck() {
        _super.call(this, new FlyWithWings(), new Quack());
    }
    MallardDuck.prototype.display = function () {
        console.log('I\'m a real Mallard Duck');
    };
    return MallardDuck;
})(Duck);
var ModelDuck = (function (_super) {
    __extends(ModelDuck, _super);
    function ModelDuck() {
        _super.call(this, new FlyNoWay(), new Quack());
    }
    ModelDuck.prototype.display = function () {
        console.log('I\'m a real Mallard Duck');
    };
    return ModelDuck;
})(Duck);
var mallard = new MallardDuck();
mallard.performQuack();
mallard.performFly();
var model = new ModelDuck();
model.performFly();
model.setFlyBehavior(new FlyRocketPowered());
model.performFly();
