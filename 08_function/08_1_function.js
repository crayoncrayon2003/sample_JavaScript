function toSeconds(hour, min, sec) {
    let answer = hour * 3600 + min * 60 + sec;
    return(answer);
}

let sec1 = toSeconds(12, 34, 56);
console.log(sec1);
