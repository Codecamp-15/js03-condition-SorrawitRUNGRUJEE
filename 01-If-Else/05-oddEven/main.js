let inputNumber = prompt("Enter your number")
let check = parseInt(inputNumber)
if(isNaN(check)) alert("Enter valid number")
else if(inputNumber % 2 == 0) {
   
    alert(`${inputNumber} is even number`)
}
else if(inputNumber % 2 != 0) {
    alert(`${inputNumber} is odd number`)
}