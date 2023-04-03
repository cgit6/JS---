let arr1 = ["item1", "item2", "item3"]
let arr2 = ["item4", "item5", "item6", "item7"]

// 方法1
// concat(arr)
let new_arr = arr1.concat(arr2);
console.log(new_arr);

// 方法2
// arr concat with spread
let new_arr2 = [...arr1, ...arr2];
console.log(new_arr2);