const findSum = (n) => {
    return n * (n + 1) / 2;
}

const t1 = performance.now();
console.log(findSum(10));
const t2 = performance.now();

console.log((t2 - t1) / 1000 + ' Seconds')