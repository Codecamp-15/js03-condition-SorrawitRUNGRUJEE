let inputScore = prompt("Enter your inputScore") || ""
let checkSpace = "" + inputScore.trim() == ""
let checkNan = isNaN(+inputScore)

if(checkNan||checkSpace) alert(`invalid input, please enter number`)
else if(inputScore < 0  || inputScore > 100) alert("invalid range, please enter score between  0- 99")
else if(inputScore >= 80) alert("your grade is A")
else if(inputScore <80  && inputScore >= 70) alert("your grade is B")
else if(inputScore <70  && inputScore >= 60) alert("your grade is C")
else if(inputScore <60  && inputScore >= 50) alert("your grade is D")
else if(inputScore < 50) alert("your grade is F")
