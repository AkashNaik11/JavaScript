const prompt= require("prompt-sync")();
let num1= parseInt(prompt("Enter the first number:"));
let num2= parseInt(prompt("Enter second number:"));

const ope= prompt("Choose any  operator(+,-,*,/,%):");

// Declaring the functions

function calSum(i,j){
    return i+j;
}

function calSub(i,j){
    return i-j;
}

function calMult(i,j){
    return i*j;
}

function calDiv(i,j){
    return i/j;
}

function calMod(i,j){
    return i%j;
}

//Declaring the conditions

if (ope == '+'){
    let a = calSum(num1,num2);
    console.log("Sum of two number is :",a);
}else if(ope == '-') {
    let b =calSub(num1,num2);
    console.log("Substraction of two number is:",b);
}else if(ope == '*'){
    let c = calMult(num1,num2);
    console.log("Multiplication of two number is:",c)
}else if(ope == '/'){
    let d = calDiv(num1,num2);
    console.log("Division of two number is:",d)
}else if(ope == '%'){
    let e = calMod(num1,num2);
    console.log("Modulus of two number is: ",e)
}else{
    console.log("Invalid Input")
}

console.log(calMod ());

