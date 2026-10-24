// =====================================================================
// TOPIC   : Inheritance in TypeScript
// EXAMPLE : 1 - Inheriting properties and methods using 'extends'
// =====================================================================

// ---------------------------------------------------------------------
// DEFINITION
// ---------------------------------------------------------------------
// INHERITANCE is a mechanism where one class (CHILD) can reuse the
// properties and methods of another class (PARENT).
// It allows us to reuse the functionality of an existing class without
// rewriting it.
//
// Terminology:
//   A                   -> properties + methods   (Parent class / Base class / Super class)
//   B extends A         -> its own properties + methods + everything from A
//                                                 (Child class / Derived class / Sub class)
//
// SYNTAX:
//   class Parent {
//       // properties and methods
//   }
//
//   class Child extends Parent {
//       constructor(...) {
//           super(...);   // call the parent constructor first
//           // child's own properties
//       }
//       // child's own methods
//   }
//
// 'super(...)' calls the constructor of the parent class (see the Super topic).

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
// Honda gets name, color, model, start(), stop() and displayInformation() from Car.
// It adds ONE new property (year) and ONE new method (yom).
class Honda extends Car {
    year: number;   // property that exists only in Honda

    constructor(name: string, color: string, model: string, year: number) {
        super(name, color, model);   // pass the common values to the parent constructor
        this.year = year;            // set the child's own property
    }

    // New method that exists only in the child class
    yom() {
        console.log(`Name: ${this.name}, Color: ${this.color}, Model: ${this.model}, YOM: ${this.year}`);
    }
}

// ---------------------------------------------------------------------
// Child class - Maruthi (another child of the same parent)
// ---------------------------------------------------------------------
class Maruthi extends Car {
    year: number;

    constructor(name: string, color: string, model: string, year: number) {
        super(name, color, model);
        this.year = year;
    }

    yom() {
        console.log(`Name: ${this.name}, Color: ${this.color}, Model: ${this.model}, YOM: ${this.year}`);
    }
}

// ---------------------------------------------------------------------
// USAGE - Honda object
// ---------------------------------------------------------------------
let honda = new Honda("Honda", "Red", "Honda city", 2024);

// Properties: name, color, model come from Car; year belongs to Honda
console.log(honda.name);    // Honda
console.log(honda.color);   // Red
console.log(honda.model);   // Honda city
console.log(honda.year);    // 2024

honda.start();              // Car started...                                      (inherited from Car)
honda.displayInformation(); // Name: Honda, Color: Red, Model: Honda city          (inherited from Car)
honda.stop();               // Car stopped...                                      (inherited from Car)
honda.yom();                // Name: Honda, Color: Red, Model: Honda city, YOM: 2024  (Honda's own method)

// ---------------------------------------------------------------------
// USAGE - Maruthi object
// ---------------------------------------------------------------------
let maruthi = new Maruthi("Maruthi", "Blue", "Suzuki", 2023);

maruthi.start();              // Car started...                                    (inherited)
maruthi.displayInformation(); // Name: Maruthi, Color: Blue, Model: Suzuki         (inherited)
maruthi.stop();               // Car stopped...                                    (inherited)
maruthi.yom();                // Name: Maruthi, Color: Blue, Model: Suzuki, YOM: 2023  (Maruthi's own method)

// Notice: start(), stop() and displayInformation() were written ONCE in Car
// and are reused by both Honda and Maruthi.

// Makes this file a module so class names don't clash with other files.
export {};
