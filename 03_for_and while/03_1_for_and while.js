console.log("forループ");
for (let i = 0; i < 10; i++) {
    console.log(i);
    if (i == 5) {
        continue;
    }
    if (i == 8) {
        break;
    }
}

console.log("配列要素でループ");
let arry = [ "Blue", "Red", "Yellow" ];
for (let i in arry) {
    console.log(arry[i]);
}

console.log("コレクションでループ");
let set = new Set();
set.add("Tanaka");
set.add("Suzuki");
for (let value of set) {
    console.log(value);
}

console.log("while");
let sum1 = 0;
while (sum1 < 10) {
    console.log(sum1);
    sum1++;
}

console.log("do while");
let sum2 = 0;
do {
    console.log(sum2);
    sum2++;
} while (sum2 < 10);
