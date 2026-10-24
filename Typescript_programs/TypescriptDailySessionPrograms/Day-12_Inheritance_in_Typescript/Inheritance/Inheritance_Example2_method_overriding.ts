// =====================================================================
// TOPIC   : Inheritance in TypeScript
// EXAMPLE : 2 - Method Overriding
// =====================================================================

// ---------------------------------------------------------------------
// DEFINITION
// ---------------------------------------------------------------------
// METHOD OVERRIDING means a child class provides its OWN implementation
// of a method that is already defined in its parent class.
//
// Rules:
//   - The method in the child must have the SAME NAME as the parent's method.
//   - It must have the same (or compatible) parameters and return type.
//   - When we call the method on a child object, the CHILD's version runs.
//   - Methods that are not overridden are inherited and used as they are.
//
// SYNTAX:
//   class Parent {
//       show() { console.log("Parent"); }
//   }
//   class Child extends Parent {
//       show() { console.log("Child"); }   // overrides Parent's show()
//   }

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

    stop() {
        console.log("Car stopped...");
    }

    displayInformation() {
        console.log(`Name: ${this.name}, Color: ${this.color}, Model: ${this.model}`);
    }
}

// ---------------------------------------------------------------------
// Child class - Honda
// ---------------------------------------------------------------------
class Honda extends Car {
    year: number;

    constructor(name: string, color: string, model: string, year: number) {
        super(name, color, model);
        this.year = year;
    }

    // Method overriding: same name as Car's start(), but different behaviour
    start() {
        console.log("Honda started...");
    }
}

// ---------------------------------------------------------------------
// Child class - Maruthi
// ---------------------------------------------------------------------
class Maruthi extends Car {
    year: number;

    constructor(name: string, color: string, model: string, year: number) {
        super(name, color, model);
        this.year = year;
    }

    // Method overriding: Maruthi has its own version of start()
    start() {
        console.log("Maruthi started...");
    }
}

// ---------------------------------------------------------------------
// USAGE
// ---------------------------------------------------------------------
let car = new Car("Car", "White", "Generic");
let honda = new Honda("Honda", "Red", "Honda city", 2024);
let maruthi = new Maruthi("Maruthi", "Blue", "Suzuki", 2023);

car.start();     // Car started...       -> parent's own version
honda.start();   // Honda started...     -> child's overridden version
maruthi.start(); // Maruthi started...   -> child's overridden version

// stop() was NOT overridden, so the inherited parent version runs for every object
honda.stop();    // Car stopped...
maruthi.stop();  // Car stopped...

// Makes this file a module so class names don't clash with other files.
export {};
