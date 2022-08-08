function isPrimeNumber(n) {
  var isPrime = false

  for (let currentNumber = 2; currentNumber <= n; currentNumber += 1) {
    if (n % currentNumber === 0 && currentNumber === n) {
      isPrime = true
      break
    } else if (n % currentNumber === 0 && currentNumber !== n) {
      break
    }
  }

  return isPrime
}

// console.log(isPrimeNumber(293))

// console.log(isPrimeNumber(297))

// console.log(isPrimeNumber(299))

// console.log(isPrimeNumber(291))


function GenerateNumberList({ max, min }) {
  let list = []

  let m = min || 1

  for (let i = m; i <= max; i++) {
    list.push(i)
  }

  return list
}

// console.log(GenerateNumberList({ max: 15 }))

function SumOfPrimeNumbers(list) {
  var result = 0
  for (let item of list) {
    if (isPrimeNumber(item)) {
      result += item
    }
  }

  return result
}

// console.log(2 + 3 + 5 + 7 + 11 + 13)

// console.log(SumOfPrimeNumbers(GenerateNumberList({ max: 14 })))

console.log(SumOfPrimeNumbers(GenerateNumberList({ max: 14, min: 5 })))

// Qual é a soma dos números primos menores que 15 ?

//   Qual é a soma dos números primos maiores que 4 e menores que 15 ? 