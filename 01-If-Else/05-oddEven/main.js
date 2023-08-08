let a = prompt("Enter your number")
let check = parseInt(a)
let message
if(isNaN(check)) alert("Enter valid number")
else if(a % 2 == 0) {
    message = "Even Number"
    alert(message)
}
else if(a % 2 != 0) {
    message ="Odd Number"
    alert(message)
}