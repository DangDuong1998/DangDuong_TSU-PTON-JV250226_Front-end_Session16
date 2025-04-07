const isPalindrome = string =>{
    let flag = true;
    let fixString = string.trim();
    let reverseString = string.trim().split('').reverse().join('');
    if(reverseString===fixString){
        return flag;
    }
    else{
        return !flag;
    }}
let input = prompt('Nhập một chuỗi để kiểm tra đối xứng:');
let result = isPalindrome(input);
if (result){
    alert(input + ' là chuỗi đối xứng!!!');
}
else{
    alert(input + ' không phải là chuỗi đối xứng!!!');
}