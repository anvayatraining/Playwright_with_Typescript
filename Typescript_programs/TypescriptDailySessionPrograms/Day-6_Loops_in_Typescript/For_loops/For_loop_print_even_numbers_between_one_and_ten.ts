//Example 2: print even numbers between 1---10

//Method1:

for (let i = 2; i <= 10; i += 2) {
    console.log(i);
}

//Method2:

for (let i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}


