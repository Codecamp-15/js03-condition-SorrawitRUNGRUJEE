let userName = prompt("please Enter your username")
let passWord = prompt("please Enter your password")

if(userName == null  ||  userName.trim() == "") alert("Username is required")
else if( passWord == null || passWord.trim() == "") alert("password is required")
else if( userName.toLowerCase() == "admin" && passWord == "1234"){
    userName = "admin"
    
    alert(`Hello, ${userName}`)
}

else if( userName.toLowerCase() == "john" && passWord == "qwerty"){
    userName = "john"
    alert(`Hello ${userName}`)
}
else alert("Invalid username or password")


    // password = prompt("please Enter your password")
        // if(password.trim() == "" || password == null)alert("password is required")
        
            
        
        
        // if(userName.toLowerCase == "admin" && password ==  "1234"ad){
            //     console.log(password)
            //     userName = "admin"
            //     alert("Hello" + userName)
            // }