// ============================================================
// Topic   : Tuples in TypeScript
// Example : 6 - Tuple Array (Array of Tuples)
// ============================================================

// We can create an ARRAY whose every element is a TUPLE.
// This is useful to store many records of the same structure, like rows of a table.
//
//   [number, string][]
//   -> [number, string] : each record is a tuple (id, name)
//   -> []               : and we can have any number of such records
//
//   Index   Tuple
//     0     [101, "Smith"]
//     1     [102, "Scott"]
//     2     [103, "Mary"]
let students: [number, string][] = [
    [101, "Smith"],
    [102, "Scott"],
    [103, "Mary"]
];

// students[0] gives the first tuple, students[1] gives the second tuple, and so on
console.log(students[0]);
console.log(students[1]);
console.log(students[2]);

// To read a single value, use two indexes: students[recordIndex][valueIndex]
console.log(students[0][1]);   // name of the first student

// Output:
// [ 101, 'Smith' ]
// [ 102, 'Scott' ]
// [ 103, 'Mary' ]
// Smith
