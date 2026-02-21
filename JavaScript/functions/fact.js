function fact(num){
    result = 1;
    for(let i = 2; i<= num ;i++){
        result = result*i;
    }
    return result;
}
console.log(fact(5));