// for of loop

let arr = [10, 20, 30, 40, 50, 60];
let obj = {key1: 10, key2: 20, key3: 30, key4: 40};
//for loop
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
// forEach loop
arr.forEach(n => {
    console.log(n);
})
// for of loop :只能用於 iterable object(str, arr, arr like obj)
for (let i of arr) {
    console.log(i);
}

// for in loop : 可用於obj
for (let i in arr) {
    // 與for of使用arr 中的 item 的方法不一樣
    console.log(arr[i]);
}

for (let i in obj) {
    console.log(obj[i]);
}

