var Person = /** @class */ (function () {
    function Person() {
        this.name = "Max";
        console.log("Creating person object...");
    }
    return Person;
}());
var pers = new Person();
console.log(pers);
