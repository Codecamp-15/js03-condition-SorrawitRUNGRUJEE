let score = prompt("please Enter your score")
let result

score >= 80? result = "A"
:score < 80 && score >= 70? result = "B"
:score < 70 && score >= 60? result = "c"
:score < 60 && score >= 50? result = "D"
:result = "F"

let msg = "your score is" + " " + result;

alert(msg)