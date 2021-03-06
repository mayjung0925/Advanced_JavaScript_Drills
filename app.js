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

 //Scoping
 //1. Create an array
 let fruits = ['apple','tomato','banana'];
//3. Declare a global variable named favFruit

//4. Create a function that will print the first fruit in the fruits array


function printFruits(){
    
    let favFruit = fruits[2];
    console.log(fruits[0]);
    
    return function printFavFruit(){
        let leastFav = fruits[1] ;
        console.log(favFruit)
    }

    console.log(leastFav);
    
    
}

//7. I see the first fruit printed in the console
printFruits()()

//8. Declare another function that will print your favorite fruit


//10 why was the printFavFruit function able to log favFruit? 
//I'm not sure but when the printFruits was called earlier , it might assign the value of the variable favFruit inside the function to the variable faFruit in the global scope 

//11. Remove the declaration of favFruit in the global scope
//12. Declare favFruit using the let keyword in the printFruits function.
// ---> printFavFruit() does not have access to the favFruit variable and is now undefined.


//14.Nest the printFavFruit function inside of the printFruits function.
//15.Call the printFavFruit function inside printFruits function
//16.Save and refresh the browser. favFruit is now logged because the printFavFruit has access to variables in its parent function.
//17.Create a new variable named leastFav using the let keyword, declare it in the scope of the printFavFruit function.
//19.Log leastFav to the console after the printFavFruit function is declared-->leastFav log should throw an error because the parent function does not have access to variables declared within the nested function.

//21.Create a new function 

greeting()
function greeting(){
    console.log('Hello'+name);
}

//22.Create a new function
//23.Call the function before it is declared as an expression, what happens? Because of hoisting and the use the ES6 an error may occur. Adjust the code to allow the function to run.


let showText = function (){
    alert("It's sunny again!")
}
showText()


