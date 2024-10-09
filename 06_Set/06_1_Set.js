//宣言：初期値なし
let set1 = new Set();
set1.add("Red");
set1.add("Green");
set1.add("Blue");
set1.add("Blue");
console.log(set1);

//宣言：初期値付き
let set2 = new Set(["Red", "Green", "Blue"]);
console.log(set2);

//要素追加
let set3 = new Set();
set3.add("Red");
set3.add("Green");
console.log(set3);
//要素削除
set3.delete("Green");
console.log(set3);
set3.clear();
console.log(set3);

//キーでループ
for (var key of set1.keys()) {
    console.log(key);
}
//値でループ
for (var value of set1.values()) {
    console.log(value);
}
//キーと値でループ
for (var [key, value] of set1.entries()) {
    console.log(key + ":" + value);
}