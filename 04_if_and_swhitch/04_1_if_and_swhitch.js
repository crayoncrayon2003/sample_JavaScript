console.log(" if ");
for (let i = 0; i < 10; i++) {
    if (i % 2 == 0) {
        console.log(String(i) + " % 2 == 0");
    }else if (i % 3 == 0){
        console.log(String(i) + " % 3 == 0");
    }else{
        console.log(i);
    }
}

console.log(" switch ");
for (let i = 0; i < 10; i++) {
    switch (i) {
        case 1:
            console.log("One");
            break;
        case 2:
            console.log("Two");
            break;
        case 3:
        case 4:
            console.log("Three or Four");
          break;
        default:
            console.log("Other");
          break;
    }
}