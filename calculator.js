let secondNumber = "";
let firstNumber;
let input = "";
let operator;
let output;

let displayArray = ["a good boy"];
//let input = document.getElementById("input");

function numberPress(elementNumber) { 
  if (output == undefined) {
     
  secondNumber += document.getElementById(elementNumber).textContent; 
  input += document.getElementById(elementNumber).textContent;

  }

  else {
    secondNumber =  document.getElementById(elementNumber).textContent; 
    input += document.getElementById(elementNumber).textContent;
  }
  console.log("This is second Number: " + secondNumber);
  document.getElementById("input").textContent = input;

    //displayArray.push(input);
    //document.getElementById("input").textContent = displayArray.join("");
    //console.log("This is the display array:" + displayArray);
}

//Function to display and store operator
function operatorPress(operatorId) {
  if (output !== undefined) {
    firstNumber = output;
  }
  else {
  firstNumber = secondNumber;
  secondNumber = "";
  }

  if (operatorId == "plus") {
      operator = "+";
  }
  else if (operatorId == "minus") {
    operator = "-";
  }
  else if (operatorId == "multiply") {
    operator = "*";
  }
  else if (operatorId == "divide"){
    operator = "/";
  }

  console.log("This is the operation: " + operator);
  input += document.getElementById(operatorId).textContent;
  document.getElementById("input").textContent = input;
}


function equals() {
 // console.log(typeof output);
 // console.log(typeof input);

  let intRealFirstNumber = parseFloat(firstNumber);;
  let intFirstNumber = parseFloat(secondNumber);



// if ( output == undefined) {
//   intRealFirstNumber = parseFloat(firstNumber);
//  intFirstNumber = parseFloat(secondNumber);
//   console.log("Output is Undefined");
//    }
//    else if (output !== undefined) {
//      console.log("This is Defined");
      
//    }

  if (operator === "+") {
    output = intRealFirstNumber + intFirstNumber;
    console.log("This is the output: " + output);
  }
  else if (operator === "-") {
    output = intRealFirstNumber - intFirstNumber;
    console.log("This is the output: " + output);
  }
  else if (operator === "*") {
    output = intRealFirstNumber * intFirstNumber;
    console.log("This is the output: " + output);
  }
  else if  (operator === "/") {
    output = intRealFirstNumber / intFirstNumber;
    console.log("This is the output: " + output);
  }

  document.getElementById("output").textContent = output;

  console.log("");
  console.log("This is the First Number: " + firstNumber);
  console.log("This is the operator: " + operator);
  console.log("This is the Second Number: " + secondNumber);
  console.log("This is the output: " + output);
}

// Function clears both displays and resets all variables
function cancel() {
  secondNumber = "";
  firstNumber;
  input = "";
  operator;
  output ="";

  document.getElementById("output").textContent = output;
  document.getElementById("input").textContent = input;
  console.log("Cancel is Working!!");
}


//deletes the last character from the input display and modifies the 
//variable as needed, I hope.
function deleteDigit() {
  //if (firstNumber == undefined) {
    //console.log(typeof secondNumber);
   // if (operator)
    secondNumber = secondNumber.substr(0, secondNumber.length -1);

    console.log("This is input: " + input);
    input = input.substr(0, input.length -1);
    console.log("This is input: " + input);

    console.log("First Number: " + secondNumber);
    document.getElementById("input").textContent = input;
 // }
 // else if (firstNumber !== undefined) {
   // console.log(typeof firstNumber);
    //firstNumber = firstNumber.substr(0, firstNumber.length -1);
    //console.log("Second Number: " + firstNumber);
    //document.getElementById("input").textContent = firstNumber;
 // }
}
