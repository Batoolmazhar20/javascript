 function tellDate(){
    // var date = moment().format('MMMM Do YYYY, h:mm:ss a | dddd ');
    //  console.log(date);
    
    var dateNow  = new Date();
    document.write(dateNow + "<br><br> ");
 }
 tellDate()


 function greetUser(){
   var firstName = prompt("Enter your first name: ");
   var lastName = prompt("Enter your last name: ");
   alert("Hello " + firstName + " " + lastName);
}
greetUser();


function sum(){
     var firstNumber = +prompt("Enter first number: ");
     var secondNumber = +prompt("Enter second number:");
     alert(firstNumber + " + " + secondNumber + " = " + (firstNumber + secondNumber));
}
sum();

function sum(num1,num2){
    var add = num1+num2
    return add
}
var num = Number(prompt("Enter a number"))
document.write(sum(2,4))



function calculation(num1, num2, operator) {
  var operation;
  if (operator == "+") {
    operation = num1 + num2;
  } else if (operator == "-") {
    operation = num1 - num2;
  } else if (operator == "*") {
    operation = num1 * num2;
  } else if (operator == "/") {
    operation = num1 / num2;
  } else {
    operation = "Invalid Operator";
  }
  return operation;
}
var userNum1 = Number(prompt("Enter a number"));
var userNum2 = Number(prompt("Enter another number"));
var userOperator = prompt("Enter an operator(+, -, *, /)");