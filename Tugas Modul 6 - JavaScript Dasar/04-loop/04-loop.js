/// Soal - 01
/// Kamu diminta untuk membuat sebuah perulangan menggunakan for loop, untuk mencetak angka prima dari 1 ~ 100
/// EDIT HERE

function prime(num) {
    let isPrime = true
    if (num === 0 || num === 1) {
        isPrime = false;
    } else if (num <= 3) {
        isPrime = true
    } else {
        for (let value = 2; value < num; value++) {
            if (num % value == 0) {
                isPrime = false;
                break;
            }
        }
    }
    return isPrime
}

function soal1(maxIteration = 100) {
    let result = [];
    for (let a = 1; a <= maxIteration; a++) {
        const isPrime = prime(a)
        if (isPrime) {
            result.push(a)
        }
    }
    return result.join(", ");
}
console.log(soal1());

/// Soal - 02
/// Kamu diminta untuk menemukan bilangan prima ke-50, temukan bilangan tersebut menggunakan while loop 

/// EDIT HERE
function soal2() {
    let primeCounter = 0
    let fiftiethPrime = 0

    let num = 0
    while (primeCounter < 50) {
        let isPrime = prime(num)
        if (isPrime) {
            primeCounter++
            if (primeCounter === 50) break
        }
        num++
    }
    fiftiethPrime = num
    return fiftiethPrime
}
console.log(soal2());


/// Soal - 03
/// Kamu diminta untuk menemukan bilangan ganjil ke-50, temukan bilangan tersebut menggunakan do while loop

/// EDIT HERE
let oddCounter = 0;
let fiftiethOdd = 0;

do {
    fiftiethOdd++;
    if(fiftiethOdd % 2)
        oddCounter++;

} while (oddCounter < 50);

console.log(fiftiethOdd);

