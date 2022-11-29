let total = function (input: number[]) : number{
    let total: number = 0;
    for (let i = 0; i < input.length; i++) {
        if(isNaN(input[i])) {
            continue;
        }
        total += Number(input[i]);
    }
    return total;

}

console.log(total([100,200,300,400,500,600,700,800,900,1000]));
console.log(total([1,2,3]));


