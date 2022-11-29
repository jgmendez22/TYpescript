
//funcion anonima

let totales = function (input: number[]) : number{
    let total: number = 0;
    for (let i = 0; i < input.length; i++) {
        if(isNaN(input[i])) {
            continue;
        }
        total += Number(input[i]);
    }
    return total;

}

console.log(totales([100,200,300,400,500,600,700,800,900,1000]));
console.log(totales([1,2,3]));

//funcion flecha

let sum1 = (input: number[]): number => {
    let total: number = 0;
    for(let i = 0; i < input.length; i++) {
        if(isNaN(input[i])) {
            continue;
        }
        total += Number(input[i]);
    }
    return total;
}



