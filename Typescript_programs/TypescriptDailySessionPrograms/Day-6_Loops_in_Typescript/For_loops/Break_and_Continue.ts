//break : used to exit the loop when a certain condition is met

for(let i=1;i<=10;i++)
{
    if(i==5)
    {
        break;
    }
    console.log(i); 
}

//continue : used to skip the current iteration of the loop and continue with the next iteration
for(let i=1;i<=10;i++)
{    
    if(i==3 ||  i==5 || i==7)
    {
        continue;
    }
    console.log(i);       
}