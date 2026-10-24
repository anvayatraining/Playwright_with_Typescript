//Nested if-else Statement
/* Syntax: 
if(condition 1)
{
    statements;
}
else if(condition 2)
{
    statements;
} 
else
{
    statements;
}
    */


//Example3: Depending on the marks, display appropriate grade.
let marks:number=50;

if(marks>=90 && marks <=100)    //Condition 1
{
    console.log("Grade A");
}
else if(marks>=75 && marks<90)   // condition 2
{
    console.log("Grade B");
}
else if(marks>=60 && marks<75)  // condition 3
{
    console.log("Grade C")
}
else
{
    console.log("Grade D");
}
