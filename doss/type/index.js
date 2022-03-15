"use strict";
// npx -p typescript tsc index.ts
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
// basic types
{
    var id = 5;
    var company = "Traversy Media";
    var isPublished = true;
    var x = 'hello';
    x = true;
}
// Arrays & Tuples
{
    // arrays
    var ids = [1, 2, 3, 4, 5];
    ids.push(6);
    // tuple 
    var person = [1, 'brad', true];
    //tuple array
    var employee = [
        [1, 'brad'],
        [2, 'john'],
        [3, 'jill']
    ];
}
// Union
{
    var id = void 0;
    id = 10;
    id = "teen";
}
//Enum
{
    var Direction1 = void 0;
    (function (Direction1) {
        Direction1[Direction1["Up"] = 0] = "Up";
        Direction1[Direction1["Down"] = 1] = "Down";
        Direction1[Direction1["Left"] = 2] = "Left";
        Direction1[Direction1["Right"] = 3] = "Right";
    })(Direction1 || (Direction1 = {}));
    var Direction2 = void 0;
    (function (Direction2) {
        Direction2["Up"] = "Up";
        Direction2["Down"] = "Down";
        Direction2["Left"] = "Left";
        Direction2["Right"] = "Right";
    })(Direction2 || (Direction2 = {}));
    console.log("Direction1.Up");
    console.log(Direction2.Right);
}
// Object With Interfaces
{
    var user = {
        id: 1,
        name: 'Jhon'
    };
}
// Object With Type
{
    var user = {
        id: 1,
        name: 'Jhon'
    };
    // object Sahel
    var user3 = {
        id: 1,
        name: 'Jhon'
    };
}
// Type Assertion
{
    var cid = 1;
    var customerId = cid;
}
// Function 
{
    // function addNum(x: number, y: number): number{
    // 	return x + y;
    // }
    // console.log(addNum(1330, 7));
    // function log(message: string | number) : void
    // {
    // 	console.log(message)
    // }
    // log("print message")
}
// Function Interfaces
{
    var add = function (x, y) { return x + y; };
    var sub = function (x, y) { return x - y; };
    console.log(add(50, 5));
}
// Classes
{
    var Person = /** @class */ (function () {
        // constructor() {
        // 	console.log("Person Default Constructor Called")
        // }
        function Person(_id, _name) {
            this.id = _id;
            this.name = _name;
            console.log(this.id, " ", this.name);
        }
        Person.prototype.register = function () {
            return "".concat(this.name, " id : ").concat(this.id, " is now registered");
        };
        return Person;
    }());
    var brad = new Person(20, "Brad Traversy");
    console.log(brad.register());
}
// Extending Classes (Subclasses)
{
    var Person = /** @class */ (function () {
        function Person(_id, _name) {
            this.id = _id;
            this.name = _name;
        }
        Person.prototype.register = function () {
            return "".concat(this.name, " is now registered");
        };
        return Person;
    }());
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
    console.log(emp.register());
}
// Generics
{
    function getArray(items) {
        return new Array().concat(items);
    }
    var numArray = getArray([1, 2, 3, 4]);
    var strArray = getArray(['brad', 'Jhon', 'Jill']);
    numArray.push(5);
}
