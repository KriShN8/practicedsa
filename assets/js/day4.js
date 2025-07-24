// let cl = console.log;


// object destructuring >>

let obj11 = {
    fname: "kk",
    lname: "jjj"
}

// let {fname,lname} =obj
// cl(fname,lname)


// largest number in array using inbuilt math.max()
let largestMax123 = (arr) => {
    return Math.max(...arr)
}
// cl(largestMax([22, 44, 77, 22, 55, 65]))


// largest number in array using loop
let larloop123 = (arr) => {
    let largest = arr[0]
    for (let item of arr) {
        if (item > largest) {
            largest = item
        }
    }
    return largest
}
// cl(larloop([22, 44, 77, 22, 55, 65]))
// 
// find largest number in array :: using reduce method

let larreduce123 = (arr) => {
    return arr.reduce((acc, cv) => {
        return cv > acc ? cv : acc
        // return acc
    }, 0)
}
// cl(larreduce([22, 44, 77, 22, 55, 65]))

// find secoand largest number in array using sort method ::
let sortLargest123 = (arr) => {
    return arr.sort((a, b) => {
        return b - a
    })[1]
}
// cl(sortLargest([22, 44, 77, 22, 55, 65]))

// find a number is prime or not
let primeNo123 = (n) => {
    if (n <= 1) return false
    if (n === 2) return true
    if (n % 2 === 0) return false
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false
        }
    }
    cl(`it is prime`)
    return true
}
// cl(primeNo(53))

// find a number is prime from n to n limit or not

let primeLimit123 = (start, end) => {
    let primes = []
    for (let i = start; i < end; i++) {
        if (primeNo(i)) {
            primes.push(i)
        }
    }
    return primes
}
// cl(primeLimit(5,20))


// find count of element in array

let countno123 = (arr) => {
    let result = {}
    for (let item of arr) {
        if (result[item]) {
            result[item]++
        } else {
            result[item] = 1
        }
    }
    return result
}
// cl(countno([77,55,11,77,55,11,88,44,88]))

// count of number in array using  reduce :

let reduceCoun12t = (arr) => {
    return arr.reduce((acc, cv) => {
        if (acc[cv]) {
            acc[cv]++
        } else {
            acc[cv] = 1
        }
        return acc
    }, {})
}
// cl(reduceCount([77, 55, 11, 77, 55, 11, 88, 44, 88]))


// count number of element in array using reduce but o/p >> {{1:2},{2:3},{3:2}}
let objectCou21nt = (arr) => {
    return arr.reduce((acc, cv) => {
        if (acc[cv]) {
            acc[cv].count++
        } else {
            acc[cv] = { number: cv, count: 1 }
        }
        return acc
    }, {})
}
// cl(objectCount([77, 55, 11, 77, 55, 11, 88, 44, 88]))


// fibonacci series with normal loop


// fibonacci series using recurrsive function
function fib212oNacciRec(num) {
    if (num === 1) return 0
    if (num === 2) return 1
    return fib212oNacciRec(num - 1) + fib212oNacciRec(num - 2)
}
// cl(fiboNacciRec(7))

// find factorial of number using recurrsive function
function findFac12or(num) {
    if (num <= 1) return 1
    return num * findFac12or(num - 1)
}
// cl(findFacor(4))


// find count of vowels :

let vowelsCount12 = (str) => {
    let vowels = str.match(/[aeiou]/ig)
    let removeVowels = str.replace(/[aeiou]/ig, "")
    cl(removeVowels)
    cl(vowels.length)
}
// cl(vowelsCount("krishna"))


// find total of all numbers in *[array]* using recurrsive :
function total12(arr) {
    if (arr.length === 0) return 0
    return arr[0] + total12(arr.slice(1))
}
// cl(total([2,5,4,3]))

// find product of all array element using recurrsive
function recurP2rod(arr) {
    if (arr.length === 0) return 1
    return arr[0] * recurP2rod(arr.slice(1))
}
// cl(recurProd([1,2,3]))

// add 0 to n using recurrsive function :

function addN12(n) {
    if (n === 1) return 1
    return n + addN12(n - 1)
}
// cl(addN(3))





// array destructuring :: array destructuring, which

let arr12 = [55, 44, 88, 77, 11, 22]
// let [a, b, e, v] = arr1
// cl(a)
// cl(b)
// cl(e)
// cl(v)


let r2 = 5, o2 = 9;
[r2, o2] = [o2, r2]
cl(r2)
cl(o2)

    //(IIFI)= imideately Invokes function expression
    // ( (name) => {
    //     return(`my name ${name}`);
    // })("krish");


//inner function must be a Anonymous >> without name

// closusers example
function outer2 (){
    let name = " kk"
    function inner (){
        cl(`my name ${name}`)
    }
    return inner()
}
// cl(outer())

// async / await

// function promiAS (){
//     return new Promise ((resolve,reject)=>{
//         let flag = true;
//         if(flag){
//             resolve("data is here")
//         }else{
//             reject("error")
//         }
//     })
// }

// async function getdata() {
//     try{
//         let res = await promiAS()
//         cl(res)
//     }
//     catch(err){
//         cl(err)
//     }
// }
// getdata()


// promice
// largest words in string

let largest22 = (str)=>{
    let largest ="";
    let words = str.split(" ")
    // cl(words)
    for(let item of words){
        if(item.length > largest.length){
            largest = item
        }
    }
    return largest
}
// cl(largest("l love you"))

// remove duplicate from array using filter
    
// find duplicate number in array without any inbuilt:
// find duplicate in array using reduce ::
let removeRedu22 = (arr)=>{
    return arr.reduce((acc,cv)=>{
       if(!acc.includes(cv)){
        acc.push(cv)
       }
        return acc
    },[])
}
// cl(removeRedu([1,2,3,4,1,2,3,4]))
// find duplicate number in array using includes :

// find duplicate number in array using set() method :

let duplicateset21 = (arr) =>{
    return [...new Set(arr)]
}
// cl(duplicateset([1, 2, 3, 4, 1, 2, 3, 4]))

// palindrome DSA
// reverse string with recurrsive function
    function reverseRecu21 (str){
        if(str === ""){
            return ""
        }
        return reverseRecu21(str.substring(1)) + str[0]
    }
    // cl(reverseRecu("i love u"))
// reverse string with reverse for loop
let reverse33  = (str) =>{
    let result = ""
    for(let i =0 ; i<str.length ; i++){
        result = str[i] + result
    }
    return result
}
// cl(reverse("i love u"))
// reverse string with for loop

















// function factorIalRe1(num) {
//     if (num === 1) return 1;
//     return num * factorIalRe1(num - 1)
// }
// console.log(factorIalRe1(3))


// console.log(25 / null) // 

// console.log([] + []) //  ""

// let str = "i have a dog"
// let findindex = str.indexOf('ve')
// let newstr = str.slice(findindex, findindex+2)
// cl(newstr)

