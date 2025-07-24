let cl = console.log;

// reverse string with for loop

function reverseStr(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        // cl(str[0])
        result = str[i] + result
    }
    return result
}
// cl(reverseStr("i love you"))

// reverse string with reverse for loop


function reverseloop(str) {
    let result = "";
    for (let i = str.length - 1; i >= 0; i--) {
        result = result + str[i]
    }
    return result
}

// cl(reverseloop("hi javascript"))

// reverse string with recurrsive function

function recurrsiveStr(str) {
    if (str === "") {
        return ""
    }
    // 
    return recurrsiveStr(str.slice(1)) + str[0]
}

// cl(recurrsiveStr("hi krishna"))

// palindrome DSA

function palindrome(str) {
    left = 0;
    right = str.length - 1;

    while (left < right) {
        if (str[left] !== str[right]) {
            cl('it is not palindrome')
            return false
        }
        cl('it is palindrome')
        return true
    }
}

// cl(palindrome("readdduu"))  //false
// cl(palindrome("racecar"))   // true


// find duplicate number in array using set() method :
const setDuplicate = (arr) => {
    // return new Set(arr)  // it returns object 
    // if u want o/p in Array
    return [... new Set(arr)]
}
// cl(setDuplicate([1, 2, 3, 4, 1, 2, 3, 4]))



// find duplicate number in array using includes :

function duplicateInclude(arr) {
    let result = [];
    for (let item of arr) {
        if (!result.includes(item)) {
            result.push(item)
        }
    }
    return result
}

// cl(duplicateInclude([1, 2, 3, 4, 1, 2, 3, 4]))


// find duplicate in array using reduce ::

const reduceDuplicate = (arr) => {
    return arr.reduce((acc, cv) => {
        if (!acc.includes(cv)) {
            acc.push(cv)
        }
        return acc
    }, [])
}

// cl(reduceDuplicate([1, 2, 3, 4, 1, 2, 3, 4]))

// find duplicate number in array without any inbuilt:

function duplicate(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        let isduplicate = false;
        for (let j = 0; j < result.length; j++) {
            if (arr[i] === result[j]) {
                isduplicate = true;
                break
            }

        }
        // ! is so important
        if (!isduplicate) {
            result.push(arr[i])
        }

    }
    return result

}

// cl(duplicate([1, 2, 3, 4, 1, 2, 3, 4]))


// remove duplicate from array using filter
let duplicatefilter = (arr) => {

    // 
    return arr.filter((num, i, arr) => {
        return arr.indexOf(num) === i
    })
}
// cl(duplicatefilter([1, 2, 3, 4, 1, 2, 3, 4]))

// largest words in string

function largestWords(str) {
    let result = "";
    let words = str.split(' ')
    cl(words)
    for (let word of words) {
        if (word.length > result.length) {
            result = word

        }
    }
    return result
}
// cl(largestWords("i love angular"))


// closusers example

function outer() {
    let fname = "krish";
    let lname = "www";
    function inner() {
        cl(`my name is ${fname}${lname}`)
    }
    return inner()
}
// cl(outer())

// promice

let fetchData = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve("data we got")
    } else {
        reject("error")
    }
})

fetchData.then((res) => {
    cl(res)
}).catch((err) => {
    cl(err)
})

// async / await

function fetchDAtaas() {
    return new Promise((resolve, reject) => {
        let flag = true
        if (flag) {
            resolve("fetch data promise")
        } else {
            reject("error from promise")
        }
    })
}

async function getDATTA() {
    try {
        let res = await fetchDAtaas();
        cl(res)
    }
    catch (err) {
        cl(err)
    }
}

// getDATTA()


//(IIFI)= imideately Invokes function expression
//inner function must be a Anonymous >> without name

(function (nam) {
    console.log(`IIFI function with function keyword my  name is ${nam}`);
})('krishna');


// use arrow function in IIFI>>
((nam) => {
    console.log(`use arrow function in IIFI my name is ${nam}`);
})('krishna');

//using iifi create async/await 

(async () => {
    const nam = await Promise.resolve(' krishna');
    console.log(`IIFI async function my name is ${nam}`);
})();

// array destructuring :: array destructuring, which
// assigns values from the array to variables in order:  >>
// The remaining values 55 and 44 are ignored 
// because they aren't included in the destructuring pattern.

let arr = [10, 20, 30, 55, 44]
let [a, b, c] = arr
// Useing the rest operator 
let [n, p, z, ...rest] = arr;
// console.log(n);    // 10
// console.log(p);    // 20
// console.log(z);    // 30
// console.log(rest); // [55, 44]
// cl(a)
// cl(b)
// cl(c)

// array destructuring :: swap values 

let x = 5, y = 10;
[x, y] = [y, x]
// cl(x)
// cl(y)


// object destructuring >> 


let obj = {
    name1: "kk",
    lname: "jj"
};

// const { name1, lname } = obj;
// console.log(name1); // Output: kk

// largest number in array using inbuilt math.max()

const mathLargest = (arr) => {
    // need to use rest operator to get values from array
    return Math.max(...arr)
}

// cl(mathLargest([22, 44, 77, 22, 55, 65]))

// largest number in array using loop

function largest(arr) {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    return max
}
// cl(largest([22,44,77,22,55,65]))

// find largest number in array :: using reduce method
// need to set parameter in arrow function :
let largestt = (arr) => {
    return arr.reduce((acc, cv) => {
        return (cv > acc) ? cv : acc
    }, arr[0])
}


// cl(largestt([22, 44, 77, 22, 55, 65]))


// find secoand largest number in array using sort method ::
let secoandLargest = (arr1) => {
    return arr1.sort((a, b) => {
        return b - a
    })[1]
}

// cl(secoandLargest([22, 44, 77, 22, 55, 65]))


// find a number is prime or not 
function primeno(n) {
    if (n <= 1) return false
    if (n === 2) return true
    if (n % 2 === 0) return false
    for (let i = 3; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false
        }
    }
    cl("prime no")
    return true

}
// cl(primeno(7))

// find a number is prime from n to n limit or not 
const primeNumLimit = (start, end) => {
    // start must be smaller than end then only we get positive value
    if (start > end) return `provide correct input `
    // we only get range from user so, create array of that length ,with 0 value
    let zeroArray = new Array(end - start + 1).fill(0)
    // cl(zeroArray)
    //then initialse this 0 values in array with , current number
    let rangeArray = zeroArray.map((_, i) => {
        return i + start
    })
    cl(rangeArray)
    // we got array like [5,6,7,8,9,10,...] then filter this with prime function ..
    let result = rangeArray.filter((num) => primeno(num))
    return result
}
// cl(primeNumLimit(5,20))

// easy way to handle to get prime numbers in limit .. 
const limitfindPrimesChat = (start, end) => {
    const primes = [];

    for (let num = start; num <= end; num++) {
        if (isPrimeN(num)) {
            primes.push(num);
        }
    }

    return primes;
};

const isPrimeN = (n) => {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
};
// cl(limitfindPrimesChat(10,20))

// find count of element in array
let num3 = [1, 2, 3, 4, 1, 2, 3, 4, 1]

let res = {}

for (let num of num3) {
    if (res[num]) {
        res[num]++
    } else {
        res[num] = 1
    }
}
// cl(res)

// count number of element in array using  reduce :

let countReduce = (arr) => {
    return arr.reduce((acc, cv) => {
        acc[cv] ? acc[cv]++ : acc[cv] = 1;
        return acc
    }, {})
}
// cl(countReduce([1, 2, 3, 4, 1, 2, 3, 4, 1]))

// count number of element in array using reduce but o/p >> {{1:2},{2:3},{3:2}}
let ObjectCount = (arr) => {
    return arr.reduce((ac, cv) => {
        if (ac[cv]) {
            ac[cv].count++
        } else {
            ac[cv] = { number: cv, count: 1 }
        }
        return ac
    }, {})
}
// cl(ObjectCount([1, 2, 3, 4, 1, 2, 3, 4, 1]))
// fibonacci series with normal loop

const findFibboLoop = (num) => {
    let fibArr = [0, 1]
    if (num === 1) return 0;
    if (num === 2) return 1;
    for (let i = 2; i < num; i++) {
        fibArr.push(fibArr[i - 1] + fibArr[i - 2])
        // cl(fibArr)
    }
    return fibArr[num - 1]
}
// cl(findFibboLoop(7))
// fibonacci series using recurrsive function

const findFibo = (num) => {
    if (num === 1) return 0
    if (num === 2) return 1
    return findFibo(num - 1) + findFibo(num - 2)
}
// cl(findFibo(7))
// cl(findFibo(8))

// fibonacci series with memorization using recurrsive

const findfiboNacci = (num, memory = {}) => {
    if (num === 1) return 0;
    if (num === 2) return 1;

    memory[num] = findfiboNacci(num - 1, memory) + findfiboNacci(num - 2, memory)
    return memory[num]
}
// cl(findfiboNacci(7))


// find factorial of number using recurrsive function
// factorial >> factorial of 4 is 1*2*3*4
// let num = 5;
const factorialFun = (num) => {
    if (num < 1) return false
    if (num === 1) {
        return 1
    }
    return num * factorialFun(num - 1)
}
// cl(factorialFun(5)) 

// find count of vowels :

let findCount = (str) => {
    let vowels = str.match(/[aeiou]/ig)
    // if we want count then :
    // cl(vowels.length)
    cl(vowels)
    return vowels
}

// findCount("krishna")

// find count of vowels with trnary operator

const findCountVowels = (str) => {
    return str.match(/[aeiou]/ig) ? str.match(/[aeiou]/ig) : 0;
}
// cl(findCountVowels("krshn"))

// find total of all numbers in *[array]* using recurrsive :

function totalOf(arr) {
    if (arr.length === 0) {
        return 0
    }
    return arr[0] + totalOf(arr.slice(1))
}
// cl(totalOf([22, 44, 11, 54, 81, 53]))

// find product of all array element using recurrsive

function productAll(arr) {
    if (arr.length === 0) {
        return 1
    }
    return arr[0] * productAll(arr.slice(1))
}
// cl(productAll([22, 44, 11, 54, 81, 53]))


// add 0 to n using recurrsive function :
const addUptoN22 = (num) => {
    if (num === 0) return 0;
    return num + addUptoN22(num - 1)
}
// cl(addUptoN22(10))





// tell order 

// console.log("Start");

// setTimeout(() => {
//     console.log("Timeout");
// }, 0);

// Promise.resolve().then(() => {
//     console.log("Promise");
// });

// console.log("End");

// console.log("Start") and "End" run first — they’re synchronous.
// Promise goes to microtask queue — runs after the call stack is clear.
// setTimeout(..., 0) goes to callback queue — runs after microtasks.


// let renovedup = (arr)=>{
//     let newres =[];
//     for(let item of arr){
//         if(!newres.includes(item)){
//             newres.push(item)
//         }
//     }
//     return newres
// }
// cl(renovedup([1,2,3,4,1,2,3,4]))

// let larg =(arr)=>{
//     largest = arr[0];
//     for(let item of arr){
//         if(item >largest){
//             largest =item
//         }
//     }
//     return largest
// }
// cl(larg([22,44,55,88,11,34,46]))

// let largestWordW = (str)=>{
//     let words = str.split(" ");
//     cl(words);
//     let largest = '';
//     for(let item of words){
//         if(item.length > largest.length){
//             largest = item
//         }

//     }
//     return largest

// }
// cl(largestWordW("i love hdhdhdr"))

// const findPrime = (n)=>{
//     if(n <= 1) return false
//     if(n === 2) return true
//     if(n%2 === 0) return false
//     for(let i=2 ; i<=Math.sqrt(n);i++){
//         if(n%i === 0){
//             return false
//         }
//     }

//     cl('it is prime number')
//     return true
// }

// cl(findPrime(11))

// const primeLIm =(start ,end)=>{
//     let prime = []
//     if(start < end){
//         for(let i =start ;i<end ;i++){
//             if (findPrime(i)){
//                 prime.push(i)
//             }
//         }
//     }
//     return prime
// }

// cl(primeLIm(5,15))

// function productRE(arr){
//     if(arr.length === 0){
//         return 1
//     }
//     return arr[0] * productRE(arr.slice(1))
// }
// cl(productRE([1,2,3,4]))

// function findtilln (n){
//     if(n === 1)return 1
//     return n * findtilln(n-1)
// }
// cl(findtilln(4))

// fibonacci >> 0,1,1,2,3,5,8,13

// function fiboooo(num){
//     if(num === 1)return 0
//     if(num === 2)return 1
//     return fiboooo(num-1) +fiboooo(num-2)
// }
// cl(fiboooo(8))

// let frequency =(arr)=>{
//     return arr.reduce((acc,cv)=>{
//         acc[cv] ? acc[cv]++ : acc[cv] =1 
//         return acc
//     },{})
// }
// cl(frequency([1,1,2,2,3,3,4,5,1,2,5,4]))

// let frequency = (arr) =>{
//     let res ={}
//     for(let item of arr){
//         if(res[item]){
//             res[item]++
//         }else{
//             res[item] = 1
//         }


//     }
//     return res
// }
// cl(frequency([1, 1, 2, 2, 3, 3, 4, 5, 1, 2, 5, 4]))

// normalm fiboonacci

// let fibooonaccci =(num)=>{
//     let fibooarr = [0,1]
//     if(num === 1)return 0 
//     if(num === 2)return 1

//     for(let i =2 ; i<num ; i++){
//        fibooarr.push(fibooarr[i-1]+fibooarr[i-2])
//     }
//     return fibooarr[num-1]
// }
// cl(fibooonaccci(7))

// let countvowelll = (str)=>{
//     // return str.match(/[aeiou]/ig)
//     return str.match(/[aeiou]/ig).length

// }
// cl(countvowelll("krishna"))

// closuers 


// function outer11 (){
//     let name = "krishna"
//     let lname = " .a. w"
//     function inner(){
//         return(`my name is ${name}${ lname}`)
//     }
//     return inner()
// }
// cl(outer11())


// let promiseFUn = new Promise((resolve,reject)=>{
//     let flag = false
//     if(flag){
//         resolve(`hi there`)
//     }else{
//         reject(console.error("error promise"))
//     }
// })

// promiseFUn.then((res)=>{
//     cl(res)
// }).catch((err)=>{
//     cl(err)
// })

// function asyncFunction (){
//     return new Promise((resolve,reject)=>{
//         let success = true
//         if(success){
//             resolve("got date")
//         }else{
//             reject("error")
//         }
//     })
// }

// async function getProise() {
//     try{
//         let res = await asyncFunction()
//         cl(res)
//     }
//     catch(error){
//         cl(error)
//     }
// }

// getProise()

// array destructuring

// let arr5 = [40,21,55,66,78]
// let [k,l,q,...yui] =arr5

// cl(k)
// cl(l)
// cl(q)
// cl(yui)

// let r =5 ,o =9;
// [r,o] =[o,r]
// cl(r)
// cl(o)

// let perobj = {
//     name111:"kk",
//     lname111:"lll"
// }
// const {name111,lname111} =perobj
// cl(name111)
// cl(lname111)



// let str ="hi , how are you?"

// let withoutVowes111 = (str)=>{
//     // let vowelsinstr = str.match(/[aeiou]/ig)
//     let withoutVow = str.replace(/[aeiou]/ig , "")
//     cl(withoutVow)


// }
// cl(withoutVowes111("hi , how are you"))
// let arr = str.split("")

// arr.filter((ele) => vowelsinstr)
// cl(withoutVowes("hi , how are you?"))


// console.log(+[]); // 0
// console.log([] + []); // ""





// let xhr = new XMLHttpRequest()

// let url = xhr.open("")



