let fiboArr: Array<number> =[0, 0, 1];
let n: number = 5, sum: number = 0;
function fibo(n: number): number {
    if (fiboArr[n] !== undefined) return fiboArr[n];
    return fibo(n - 2) + fibo(n - 1)
}

for (let i: number = 0; i <= n; i++) {
    fiboArr[i] = fibo(i);
    sum += fiboArr[i];
    // console.log(sum)

}

console.log(fibo(n));

console.log(sum)
