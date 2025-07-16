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

// largest words in string 

function largestWords(str){
    let result = "";
   let words = str.split(' ')
    cl(words)
    for(let word of words){
        if(word.length > result.length){
            result = word

        }
    }
    return result
}
// cl(largestWords("i love angular"))


// closusers example

function outer (){
    let fname ="krish" ;
    let lname ="www";
    function inner(){
        cl(`my name is ${fname}${lname}`)
    }
    return inner()
}
// cl(outer())

// promice 

let fetchData = new Promise ((resolve,reject)=>{
    let success = true ;
    if(success){
        resolve("data we got")
    }else{
        reject("error")
    }
})

fetchData.then((res)=>{
    cl(res)
}).catch((err)=>{
    cl(err)
})

// async / await 

function fetchDAtaas(){
 return new Promise ((resolve,reject)=>{
    let flag = true
    if(flag){
        resolve("fetch data promise")
    }else{
        reject("error from promise")
    }  
 })
}

async function getDATTA(){
    try{
        let res = await fetchDAtaas();
        cl(res)
    }
    catch(err){
        cl(err)
    }
}

// getDATTA()


//(IIFI)= imideately Invokes function expression
//inner function must be a Anonymous >> without name 

    (function (nam) {
        console.log(`my name is ${nam}`);
    })('krishna');


// array destructuring >>
let arr = [10,20,30,55,44]
let [a,b,c] =arr
// cl(a)
// cl(b)
// cl(c)

// array destructuring  swap values 

let x=5,y=10;
[x,y] = [y,x]
// cl(x)
// cl(y)


// object destructuring >> 
// let obj = {
//     name:"kk",
//     lname:"jj"
// }
// const{name,lname} = obj
// cl(name)

let obj = {
    name1: "kk",
    lname: "jj"
};

// const { name1, lname } = obj;
// console.log(name1); // Output: kk


// largest number in array 

function largest (arr){
    let max = arr[0];
    for(let i =0 ;i<arr.length;i++){
        if(arr[i] > max){
            max = arr[i]
        }
    }
    return max
}
// cl(largest([22,44,77,22,55,65]))
// arr = [22, 44, 77, 22, 55, 65]
const lar =  arr.reduce((acc,cv)=>{
   return (cv>acc) ? cv :acc
},arr[0])

// cl(lar)

// let arr1 = [22, 44, 77, 22, 55, 65]
// let seclarg = arr1.sort((a,b)=>{
//     return b-a 
// })[1]
// cl(seclarg)

function primeno (n){
   if(n<=1)return false
   if(n===2)return true
   if(n%2 === 0)return false
   for(let i=3;i<=Math.sqrt(n);i++){
    if(n % i === 0){
        return false
    }
   }
   cl("prime no")
   return true

}
// cl(primeno(7))

// find count of element in array
let num3 = [1,2,3,4,1,2,3,4,1]

let res={}

for(let num of num3){
    if(res[num]){
        res[num]++
    }else{
        res[num] =1 
    }
}
// cl(res)


// fibonacci series

const findFibo = (num)=>{
    if(num ===1 )return 0
    if(num === 2)return 1
    return findFibo(num-1)+findFibo(num-2)
}

cl(findFibo(7))
cl(findFibo(8))


