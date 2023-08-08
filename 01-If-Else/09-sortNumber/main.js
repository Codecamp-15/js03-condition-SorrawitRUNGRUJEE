let first_num = +prompt("enter first number");
let second_num = +prompt("enter second number");
let third_num = +prompt ("enter third number");

let pos_1
let pos_2
let pos_3

if(first_num > second_num && first_num > third_num ){
    pos_1 = first_num 
    if(second_num > third_num){
        pos_2  = second_num 
        pos_3  = third_num
    } else{
        pos_2  = third_num 
         pos_3 = second_num 
    }
} else if(second_num > first_num && second_num > third_num){
         pos_1 = second_num 
        if(first_num > third_num){
            pos_2 =  first_num
            pos_3 =  third_num
        }
        else{
              pos_2 = third_num
              pos_3 = first_num 
        }
} else if(third_num > first_num && third_num > second_num){
     pos_1 = third_num
    if(first_num > second_num){
        pos_2 =  first_num
          pos_3 = second_num
    }
    else{
        pos_2 = second_num
        pos_3 = first_num 
    }

}

console.log(String(pos_1) + " " + String(pos_2) +  " " + String(pos_3))