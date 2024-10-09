var map1 = new Map([["key1", 160], ["key2", 120]]);

var map2 = new Map();
map2.set("key1", 160);   //キーでバリューを覚える
map2.set("key2", 120);
map2.set("key3", 100);
map2.set("key4", 90);
console.log ( "key1:" + String( map2.get("key1") ) );        //キーからバリューを取る
console.log ( "key2:" + String( map2.get("key2") ) );

// 要素持ってる？
console.log ( " has key1 ? " + String( map2.has("key1") ) );
console.log ( " has key3 ? " + String( map2.has("key3") ) );
// 要素を消す
map2.delete("key4");

// キーとバリューのセットを取る
for (var [key, value] of map2) {
    console.log(key, ":", value);
}
// キーとバリューのセットを取る
for (var [key, value] of map2.entries()) {
    console.log(key, ":", value);
}

// キーの数分ループ
for (var key of map2.keys()) {
    console.log(key, ":", map2.get(key));
}
// 値の数分ループ
for (var value of map2.values()) {
    console.log(value);
}
