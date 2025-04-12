var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var emp1 = {
    id: 20,
    name: "charpitha",
    address: "ooty"
};
var emp2 = {
    id: 22,
    name: "thavishala",
    address: "shimla"
};
var emp3 = {
    id: 22,
    name: "thavishala",
};
var Bird = /** @class */ (function () {
    // private name:string; //default public in ts
    // private id:number;
    function Bird(id, name) {
        this.id = id;
        this.name = name;
        // this.id=bid; //access memeber of the class within class method
        // this.name=name;
    }
    Bird.prototype.DoEat = function () {
        console.log("Bird id:".concat(this.id, " and name :").concat(this.name));
    };
    Bird.prototype.fly = function () {
        console.log("Bird id:".concat(this.id, " and name :").concat(this.name));
    };
    return Bird;
}());
var b1 = new Bird(1, 'Crow'); //object creation for class
// b1.name='Crow'; //access the properties 
// b1.id=1;
b1.DoEat();
b1.fly();
// console.log(b1.name);//access the bird name //cannot access the class member bcz it is private member
var SplBird = /** @class */ (function (_super) {
    __extends(SplBird, _super);
    function SplBird() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SplBird.prototype.Move = function () {
        _super.prototype.DoEat.call(this); //calling Basr Class Function
    };
    return SplBird;
}(Bird));
var s = new SplBird(2, "Duck");
s.Move();
