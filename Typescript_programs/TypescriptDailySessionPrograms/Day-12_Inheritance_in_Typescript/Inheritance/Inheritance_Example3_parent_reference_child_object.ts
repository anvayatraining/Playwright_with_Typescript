// =====================================================================
// TOPIC   : Inheritance in TypeScript
// EXAMPLE : 3 - Parent class variable holding a child class object
// =====================================================================

// ---------------------------------------------------------------------
// DEFINITION
// ---------------------------------------------------------------------
// A variable whose type is the PARENT class can hold an object of a
// CHILD class (because a Honda IS a Car).
//
// SYNTAX:
//   let variableName: ParentClass = new ChildClass(...);
//
// Two important points:
//   1) At COMPILE time, the variable's declared type (Car) decides which
//      members we are ALLOWED to use. Only members that exist in the
//      parent class are accessible.
//   2) At RUN time, the actual object (Honda) decides WHICH VERSION of an
//      overridden method runs.

// ---------------------------------------------------------------------
// Parent class
// ---------------------------------------------------------------------
class Car {
    name: string;
    color: string;
    model: string;

    constructor(name: string, color: string, model: string) {
        this.name = name;
        this.color = color;
        this.model = model;
    }

    start() {
        console.log("Car started...");
    }

    displayInformation() {
        console.log(`Name: ${this.name}, Color: ${this.color}, Model: ${this.model}`);
    }
}

// ---------------------------------------------------------------------
// Child classes
// ---------------------------------------------------------------------
class Honda extends Car {
    year: number;

    constructor(name: string, color: string, model: string, year: number) {
        super(name, color, model);
        this.year = year;
    }

    // Overridden method
    start() {
        console.log("Honda started...");
    }

    // Method that exists ONLY in Honda (not in Car)
    yom() {
        console.log(`Name: ${this.name}, Color: ${this.color}, Model: ${this.model}, YOM: ${this.year}`);
    }
}

class Maruthi extends Car {
    year: number;

    constructor(name: string, color: string, model: string, year: number) {
        super(name, color, model);
        this.year = year;
    }

    // Overridden method
    start() {
        console.log("Maruthi started...");
    }
}

// ---------------------------------------------------------------------
// USAGE - parent type variable, child object
// ---------------------------------------------------------------------
let car: Car = new Honda("Honda", "Red", "Honda city", 2024);

car.displayInformation(); // Name: Honda, Color: Red, Model: Honda city   (inherited from Car)
car.start();              // Honda started...   -> the overridden method of the actual object (Honda) runs

// yom() is defined only in the child class (Honda), not in Car.
// Because 'car' is declared as type Car, TypeScript does not allow it. Uncomment to see the error.
// car.yom();   // Error: Property 'yom' does not exist on type 'Car'.

// ---------------------------------------------------------------------
// BONUS - one array of the parent type holding different child objects
// ---------------------------------------------------------------------
// Each object runs ITS OWN version of start(), even though we call it the same way.
const cars: Car[] = [
    new Honda("Honda", "Red", "Honda city", 2024),
    new Maruthi("Maruthi", "Blue", "Suzuki", 2023),
    new Car("Car", "White", "Generic")
];

for (const c of cars) {
    c.start();
}
// Honda started...
// Maruthi started...
// Car started...

// Makes this file a module so class names don't clash with other files.
export {};
