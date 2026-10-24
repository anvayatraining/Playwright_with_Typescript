// =====================================================================
// TOPIC   : Access Modifiers in TypeScript
// EXAMPLE : 2 - Access modifiers with inheritance (child class)
// =====================================================================

// ---------------------------------------------------------------------
// RECAP (see Example 1)
// ---------------------------------------------------------------------
//   public     - accessible anywhere
//   protected  - accessible in the class and its child classes
//   private    - accessible only in the class where it is declared
//
// In this example a CHILD class (Employee) extends a PARENT class (Person).
// We check which members of the parent the child can use.
// ('extends' and 'super' are explained in the Inheritance and Super topics.)

// ---------------------------------------------------------------------
// Parent class
// ---------------------------------------------------------------------
class Person {
    public name: string;     // public    - accessible anywhere
    protected age: number;   // protected - accessible within the class and its subclasses
    private ssn: number;     // private   - accessible only within this class

    constructor(name: string, age: number, ssn: number) {
        this.name = name;
        this.age = age;
        this.ssn = ssn;
    }

    public displayInfo() {
        console.log("Name:", this.name);
        console.log("Age:", this.age);
        console.log("SSN:", this.ssn);   // allowed: we are inside the Person class
    }
}

// ---------------------------------------------------------------------
// Child class
// ---------------------------------------------------------------------
class Employee extends Person {
    private employeeId: number;   // private to Employee

    constructor(name: string, age: number, ssn: number, employeeId: number) {
        super(name, age, ssn);    // call the parent class constructor
        this.employeeId = employeeId;
    }

    public showEmployeeDetails() {
        console.log(this.name);        // public    - accessible
        console.log(this.age);         // protected - accessible (child class can use it)
        // console.log(this.ssn);      // Error: 'ssn' is private to Person, so the child class cannot access it
        console.log(this.employeeId);  // private, but still accessible because it is declared inside this same class
    }
}

// ---------------------------------------------------------------------
// USAGE (outside the classes)
// ---------------------------------------------------------------------
let emp = new Employee("John", 30, 212312312, 101);

emp.displayInfo();
// Name: John
// Age: 30
// SSN: 212312312
// (displayInfo() is inherited from Person, so it can read the private 'ssn')

emp.showEmployeeDetails();
// John
// 30
// 101

console.log(emp.name);  // John - public, accessible from outside

// Not accessible from outside. Uncomment to see the errors.
// console.log(emp.age);        // Error: 'age' is protected - only accessible within Person and its subclasses
// console.log(emp.ssn);        // Error: 'ssn' is private - only accessible within Person
// console.log(emp.employeeId); // Error: 'employeeId' is private - only accessible within Employee

// Makes this file a module so class names don't clash with other files.
export {};
