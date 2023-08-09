let username = prompt("Enter your username")
let user

    switch(username){
        case "":
            user = "guest"
            break
        case null:
            user = "guest"
            break
        case "codecamp":
            let password = prompt("please enter your password")
            switch(password){
            case '123456':
                user = "codecamp"
                alert("Welcome" + " " + user)
                break
            default:
                alert("wrong password")


            }
        break
        
        default:
            user = "guest"

       
    }

    alert(`welcome  ${user}`)