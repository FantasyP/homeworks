/**
 * Created by wdd on 2017/7/2.
 */
function clickFunc() {
    var input1 = document.getElementById('num1');
    var input2 = document.getElementById('operation');
    var input3 = document.getElementById('num2');
    var operation = input2.selectedOptions[0].value;
    if(input1.value === '' ||　input3.value === ''){
        alert('请输入数字');
        return;
    }
    var result = calculate(Number(input1.value),Number(input3.value),operation);
    if(result){
        alert(result);
    }
}
function calculate(num1,num2,operation){
    if((!num1 && num1 !== 0) || (!num2 && num2 !== 0)){
        alert('请输入数字');
        return undefined;
    }
    else if(operation === "+"){
        return num1 + num2;
    } else if(operation === '-'){
        return num1 - num2;
    } else if(operation === '*'){
        return (num1 * num2).toFixed(9);
    } else if(operation === '/'){
        if(num2 === 0){
            alert('除数不能为0');
            return NaN;
        }
        return (num1 / num2).toFixed(9);
    }
    return undefined;
}