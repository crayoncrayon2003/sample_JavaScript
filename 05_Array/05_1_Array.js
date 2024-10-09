// 宣言：初期値付き
let arr1 = ["Red", "Green", "Blue"];
console.log(arr1);
console.log(arr1[0]);
console.log(arr1[1]);
console.log(arr1[2]);

// 宣言：要素空
let arr2 = new Array();
// 宣言：要素数指定
let arr3 = new Array(3);

// 宣言：setから変換
let set1 = new Set(["Red", "Green", "Blue"]);
let arr4 = Array.from(set1);
console.log(arr4);

// 宣言：mapから変換
let map1 = new Map([["key1", "Value1"], ["key2", "Value2"], ["key3", "Value3"]]);
let arr5 = Array.from(map1);
console.log(arr5);

// 配列の長さでループ
for (let i=0; i<arr1.length; i++) {
  console.log(arr1[i]);
}

// 配列のindexと要素でループ
for (let elem of arr1.entries()) {
  console.log(elem[0] + ":" + elem[1]); //indexと要素
}
// 配列のindexでループ
for (let key of arr1.keys()) {
  console.log(key);
}
// 配列の要素でループ
for (let value of arr1.values()) {
  console.log(value);
}

//配列のチェック
console.log("Redの位置　：" + arr1.indexOf("Red")  );
console.log("aaaの位置　：" + arr1.indexOf("aaa")  );
console.log("Redを含む？：" + arr1.includes("Red") );
console.log("aaaを含む？：" + arr1.includes("aaa") );
console.log("配列？　　　：" + Array.isArray("ABC"));
console.log("配列？　　　：" + Array.isArray(arr1) );

let arr6 = ["Green"];
arr6.unshift("Red");         // 配列先頭に追加
console.log(arr6)
arr6.push("Blue");           // 配列末尾に追加
console.log(arr6)
var tmp = arr6.shift();         // 配列先頭から抜く追加
console.log(tmp)
console.log(arr6)
var tmp = arr6.pop();           // 配列末尾から抜く追加
console.log(tmp)
console.log(arr6)
