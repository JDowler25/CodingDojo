function multiples(x,n){
    const res = [];
    for(let i = 1; i <= n; i++){
        res.push(x*i);
    }
    return res
}

let x = 5;
let n = 7; 

console.log(multiples(x,n))