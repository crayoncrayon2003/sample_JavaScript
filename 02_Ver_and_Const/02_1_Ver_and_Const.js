var a = 3;          // スコープを意識しない変数
let b = 3;          // スコープを意識する変数
const c = 1;        // 常数
{
  var a = 5;
  let b = 5;
}
console.log(a);     // 5 (ブロック内で上書きされる)
console.log(b);     // 3 (ブロック内で上書きされない)
console.log(c);
