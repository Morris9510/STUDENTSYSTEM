//variables

let age = parseFloat(prompt("Enter your age"));
let studentName = prompt("Enter your name");

alert("thank you for your answer");
document.write(`<p>Age: ${age}</p>
            <p>Name: ${studentName}</p>`);
alert("I need to use variables to process your age");
console.log(age);

function powerThree(x) {
  x = Number(prompt("Enter a Number")) * 3;
  console.log(x);
}
powerThree();

function taxCalc(incomes) {
  return incomes * 0.3;
}
function ssnAccount() {
  let taxes = taxCalc(100000);
  console.log(taxes);
}
