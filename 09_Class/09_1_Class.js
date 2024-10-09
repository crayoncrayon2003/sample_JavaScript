class AAA {
    constructor(neme, age) {
        this.name = name;
        this.age = age;
    }
    setName(name) {
        this.name = name;
    }
    getName() {
      return this.Name;
    }
    myOverride() {
        console.log("Hello");
    }
    myOverload(name) {
        this.name = name;
    }
}

class BBB extends AAA {
    constructor(name) {
        super("Cat");       //親のコンストラクタ呼び出し
        this.name = name;
    }
    myOverride() {
        console.log("Hello Hello!");
    }
    myOverload(name,age) {
        this.name = name;
        this.age = age;
    }
}

var objAAA = new AAA("I am AAA",10);
var objBBB = new BBB("I am BBB",20);
objAAA.myOverride();
objBBB.myOverride();

objAAA.myOverload("I am CCC");
objBBB.myOverload("I am CCC",30);