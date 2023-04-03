// Advanced Array
/**
 * map(): 回傳更新後的東西
 * find(): 回傳第一個符合條件的值
 * filter(): 回傳所有符合條件的值
 * some()
 * every()
 * sort()
 */

// map() function
let arr1 = ["item1", "item2", "item3", "item4", "item5"];
let new_arr1 = arr1.map(function (item) {
    return item.toUpperCase();
});
console.log(new_arr1);

// find() function
let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let new_arr2 = arr2.find(function (item) { 
    // return condition
    return item > 5;
});
console.log(new_arr2);

// filter() function
let arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let new_arr3 = arr3.filter(function (item) {
    // return condition
    return item > 5;
});
console.log(new_arr3);

// some() function 
let arr4 = [1, 2, 3, 4, 5, 6, 7];
let new_arr4 = arr4.some(function (item) {
    return item > 5;
})
// return boolean
console.log(new_arr4)

// every() function
let arr5 = [1, 2, 3, 4, 5, 6];
let new_arr5 = arr5.every(function (item) {
    return item > 5;
})
// return boolean
console.log(new_arr5);

// sort() function 排序
// 文字原則
let str = ["G", "F", "A", "B", "C", "D", "E"];
let letters = [52, 2, 4, 3, 1, 6];
// no input 
str.sort();
letters.sort();
// return sorted array
console.log(letters, str);

let str_lang = ["as", "frr", "it", "de", "edfknd"];
str_lang.sort(function (a, b) { 
    return a.length - b.length;
})
console.log(str_lang);
// 數字原則
letters.sort(function (a, b) { 
    return a - b;
})
console.log(letters);


