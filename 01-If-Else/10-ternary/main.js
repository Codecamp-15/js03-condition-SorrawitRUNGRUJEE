let age = prompt("How old are you") || ""
let checkNan = isNaN(+age)
let checkString = age.trim() == ""
if(checkString||checkNan) alert(`invalid input, please enter your age`)
else age >= 18 ? 
alert(`you are allowed`):
alert("You are not allow");
