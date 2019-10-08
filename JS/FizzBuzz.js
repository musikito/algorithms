/*Write a program that prints the numbers from 1 to 100. 
But for multiples of three print “Fizz” instead of the number and for the 
multiples of five print “Buzz”. For numbers which are multiples of both three and five print “FizzBuzz”*/

var str="",x,y,a;
for (a=1;a<=100;a++)
{
    x = a%3 ==0;
    y = a%5 ==0;
    if(x)
    {
        str+="fizz"
    }
    if (y)
    {
        str+="buzz"
    }
    if (!(x||y))
    {
        str+=a;
    }
    str+="\n"
}
console.log(str);