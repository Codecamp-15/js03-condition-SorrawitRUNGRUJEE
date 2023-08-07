let number1 = prompt("enter first nummber")
let number2 = prompt("enter second nummber")
let wrong = "Invalid Number"
if(isNaN(number1)) alert(wrong)
if(isNaN(number2)) alert(wrong)
else alert(Number(number1) + Number(number2))

// let result = Number(number1) + Number(number2)
// if(isNaN(result))alert("Invalid Number")
// else alert(result)