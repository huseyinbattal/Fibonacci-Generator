function fibonacciGen(num) {
    if (num <= 1) {
        console.log("1'den büyük bir değer giriniz.");
    }
    else {
        const arr = [0, 1];
        let a, b;
        for (let i = 2; i < num; i++) {
            a = arr[i - 1];
            b = arr[i - 2];
            arr.push(a + b);

        }
        return console.log(arr);

    }
}

fibonacciGen(10);

function fibonacciFinder(num) {
    const goldenRatio = 1.618034;

    return Math.round((Math.pow(goldenRatio, (num - 1))- Math.pow((1 - goldenRatio), (num - 1))) / Math.sqrt(5));


}

console.log(fibonacciFinder(8));



