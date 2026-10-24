// 7. VOID TYPE
// Used for functions that don't return anything

function show() : void
{
    console.log("Welcome");    
}

show();

function sum(x:number, y:number):number
{
    return(x+y);
}

let res:number=sum(10,20);
console.log(res)

let res1:number=100+sum(10,20);
console.log(res1);