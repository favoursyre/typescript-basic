"use strict";
//I want to learn how to use typescript
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
exports.__esModule = true;
//Typescript allows for statical scripting
console.log("testing");
var _name = "Favour Syre";
var _age = 23;
var career = "Life Hacker";
var items = [1, 3, "Hello"];
// let _name: string = window.prompt("Enter name: ")
// let _age: number = parseInt(window.prompt("Enter age: "))
console.log("My name is ".concat(_name, ", I'm ").concat(_age, "'s old and I'm a ").concat(career, ".\n").concat(items, "\n"));
//Tuple
var person_ = [1, true];
var persons;
persons = [
    ["Syre Musk", 23],
    ["Uchiha Syre", 20],
    ["Syre Chi", 27],
];
console.log(person_);
//Union
var user_;
user_ = 22;
var user = {
    id: 1,
    name: 'John'
};
console.log("User: ".concat(user.id));
// Functions
function addNum(x, y) {
    return x + y;
}
// Void
function log(message) {
    console.log(message);
}
var user1 = {
    id: 1,
    name: 'John'
};
var add = function (x, y) { return x + y; };
var sub = function (x, y) { return x - y; };
// Classes
var Person = /** @class */ (function () {
    function Person(id, name) {
        this.id = id;
        this.name = name;
    }
    Person.prototype.register = function () {
        return "".concat(this.name, " is now registered");
    };
    return Person;
}());
var brad = new Person(1, 'Brad Traversy');
var mike = new Person(2, 'Mike Jordan');
// Subclasses
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(id, name, position) {
        var _this = _super.call(this, id, name) || this;
        _this.position = position;
        return _this;
    }
    return Employee;
}(Person));
var emp = new Employee(3, 'Shawn', 'Developer');
// Generics
function getArray(items) {
    return new Array().concat(items);
}
var numArray = getArray([1, 2, 3, 4]); //Passing another datatype asside from int to this variable would throw an error
var strArray = getArray(['brad', 'John', 'Jill']);
strArray.push(1); // Throws error
