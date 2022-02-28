//Hoisting and Functions
//1. set the name
name = 'Eunjin';
//2.Use var to define a variable
var name;
//3. Log the value of name --> I expected 'Eunnin ' to be logged to the console
console.log(name);
//4. I saw currnet name printed in the console
//5. var - >let
//7. let->var ,  Create a function, call the function
//8. I expected the value of name variabele,Covalence, to be logged to the console
setName()
 function setName(){
     var name = 'Covalence';
     console.log(name);
 }

 console.log('some text')

 let avg = findAvg(2,2);

 console.log('some text', avg);

 function findAvg(a, b){
     console.log('some text');
     var answer = ( a + b )/2;
     return answer;

 }
 //11. In what order will the logs be printed?
 //Firt Line 18 ->Second Line 25  when findAvg is called at line 20 ->Third Line 22

