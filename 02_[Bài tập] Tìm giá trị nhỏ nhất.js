const arr1 = [3, 5, 1, 8, -3, 7, 8];
const arr2 = [7, 12, 6, 9, 20, 56, 89];
const arr3 = [];
const arr4 = [0, 0, 0, 0, 0, 0];

function minFinder(arr) {
    if (arr.length===0) {
        return 'Hàm trống!!!'
    }
    else{
        return arr.reduce((acc,curr)=>{
            return acc<curr?acc:curr;
        }) 
    }
};
console.log('arr1:' + minFinder(arr1));
console.log('arr2:' + minFinder(arr2));
console.log('arr3:' + minFinder(arr3));
console.log('arr4:' + minFinder(arr4));
