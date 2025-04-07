const isEven = number=>number%2===0;
let inputNumber = +prompt('Nhập số nguyên bất kỳ');
let result = isEven(inputNumber);
if(result){
    alert(inputNumber + ' là số chẵn!!!')
}
else{
    alert(inputNumber + ' là số lẻ!!!')
}