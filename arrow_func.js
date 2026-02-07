const vowel = (arg) =>{
    let cnt = 0;
    for(let i of arg){
        if(i === "a" || i == "e" || i == "i" || i == "o" || i == "u"){
            cnt++;
        }
    }
    return cnt;
}

let str = "hello rayan islam";
console.log(vowel(str));