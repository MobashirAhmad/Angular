//defining function using function expression
// let myfunc = function () {
//     console.log("This is a statement");
// };
// myfunc();


//2nd Way using function declaration
// function myFunc() {
//     console.log("This is a statement");
// }
// myfunc();

// This works because the browser finds the function declaration when it parses the JavaScript
// file and sets up the function before the remaining statements are executed, a process known as
// function hoisting.
// myFunc();
// function myFunc() {
//     console.log("This is a statement");
// }

// Function expressions, however, are not subject to hoisting, which means that this
// code will not work:
// myFunc();
// let myFunc = function() {
// console.log("This is a statement");
// };


let myFunc=function(firstNaame,lastName)
{

  console.log(firstNaame+lastName);
}
myFunc("Raj","Kishor");