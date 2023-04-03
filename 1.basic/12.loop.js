// loop function
/**
 * 1. for loop : 當迭代次數已知時
 * 2. while loop : 當迭代次數未知時
 * 3. break,continue
 * 4. Nested Loop
 */

// for (起始位置,終止位置(中止條件),間隔) {}
for (let i = 0; i <= 10;i++) {
    // do something
}

// while loop
let j = 0
// 如果 condition 成立則執行
while (j<=10) {
    //  do something
    j++
}

// break 終止迭代
for (let k = 0; k <= 10; k++) {
    if ((k == 5)) {
        break;
    }
  console.log(k);
}
// continue 中止當前迭代
for (let l = 0; l <= 10; l++) {
    if (l == 5) {
        continue;
    }
    console.log(l)
}

// Nested Loop
for (let i = 0; i <= 10; i++) {
    for (let j = 0; j <= 10; j++) {
        // do something
    }
}

// return vs break
// break 只能終止一層loop; return 可以終止 nested loop
function trying() {
  for (let i = 0; i < 10; i++) {
    console.log(i);

    if (i == 5) {
      return;
    }
  }
}

// loop trough an arr
let arr = ["item1","item2","item3","item4","item5","item6","item7"];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}