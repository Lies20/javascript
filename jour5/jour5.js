console.log(process.argv);

function calculate(num1,num2,operator){
    if (operator == "+") {
      let result =  num1 + num2;
      console.log(result)
    } else if (operator == "*") {
        let result = num1 * num2
        console.log(result);
    } else if (operator == "%"){
        let result = num1 % num2
        console.log(result);
    }else if ( operator == "-") {
        let resulte = num1 - num2
        console.log(result);
    }

}
calculate(5,4,"*");