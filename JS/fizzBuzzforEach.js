let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

/*
for (let i = 1; i<= 15; i++)
{
    if (i%3 === 0){
        console.log("Fizz" || i);
    }
}

*/

numbers.forEach(num => {
    /*if (num % 3 === 0 && num % 5 === 0 );
    {
        console.log("FizzBuzz");
    }
    if (num % 3 === 0)
    {
        console.log("fizz");
    }
    if(num % 5 === 0)
    {
        console.log("buzz");
    }
    */
   let out = '';
   if ( num % 3 === 0) out += "Fizz";
   if ( num % 5 === 0) out += "Buzz";

   console.log(out || num);

    
});
