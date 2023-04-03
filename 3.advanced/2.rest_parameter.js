// spread operator and rest parameters

// rest parameters是指當不確定input 參數有幾個的時候，例如:
console.log(Math.max(-2, 60, 3, 1));

// 在input 的位置加入 ...
function checkBiggest(...arr) {
    let biggest = - Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > biggest) {
         biggest = arr[i];
        }   
    }
    return biggest;
}
let arr = [1, 3, 6, 3, 6, 8, 7, 53, 2, 5, 78, 7, 5, 32];
let result = checkBiggest(arr);
console.log(result);
