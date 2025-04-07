const sum = arr => {
    return result= arr.reduce((acc,curr)=>{
        return acc + curr;
    },0)
}
const arr1 = [1, 2, 3, 4, 5, 6];
const arr2 = [10, 20, 30, 40, 50]; 
const arr3 = [1, 3, 5, 7, 9]; 
alert(sum(arr1) + ' là tổng của arr1: ' + arr1);
alert(sum(arr2) + ' là tổng của arr2: ' + arr2);
alert(sum(arr3) + ' là tổng của arr3: ' + arr3);
