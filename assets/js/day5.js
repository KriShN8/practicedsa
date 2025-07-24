let cl = console.log;


// // object destructuring >>

//  let obj = {
//     fname:"kkkr",
//     age:99
//  }
//  let {fname,age} =obj
// //  cl(fname,age)


// // largest number in array using inbuilt math.max()
// let largest33 = (arr)=>{
//     return Math.max(...arr)
// }
// // cl(largest33([44,77,88,44,99,11,55,33]))


// // largest number in array using loop
// let largestloop = (arr)=>{
//     let largest =arr[0];
//     for(let i = 0; i<arr.length ; i++){
//         if(arr[i] > largest){
//             largest =arr[i]
//         }
//     }
//     return largest
// }
// // cl(largestloop([44,77,88,44,55,92,66,11]))

// // find largest number in array :: using reduce method
// let reduceLarg = (arr)=>{
//     return arr.reduce((acc,cv)=>{
//         if(acc > cv){
//             acc
//         }else{
//             acc =  cv;
//         }
//         return acc
//     },0)
// }
// // cl(reduceLarg([44,77,55,11,44,55,66]))

// // find secoand largest number in array using sort method ::
// // [22, 44, 77, 22, 55, 65]
// let secoandLarges = (arr)=>{
//     return arr.sort((a,b)=>{
//         return b - a
//     })[1]
// }
// // cl(secoandLarges([44,77,55,44,22,33,88,94,61,35]))


// // find a number is prime or not
// let primeN =(n)=>{
//     if(n <= 1)return false
//     if(n === 2) return true
//     if(n % 2 === 0) return false

//     for(let i= 2 ; i<= Math.sqrt(n) ;i++){
//         if(n % i === 0 )return false
//     }
//     // cl(`${n} is a prime number`)
//     return true
// }
// // cl(primeN(7))



// // find a number is prime from n to n limit or not

// let primiLimm = (start, end)=> {
//     let prim =[]
//     for(let i =start ; i <= end ; i++){
//         if(primeN(i)){
//             prim.push(i)
//         }
//     }
//     return prim
// }

// // cl(primiLimm(5, 19))



// // find count of element in array
// // [77,55,11,77,55,11,88,44,88]

// let countEle = (arr) => {
//     let result ={}
//     for(let item of arr){
//         if(result[item]){
//             result[item] ++
//         }else{
//             result[item] = 1
//         }
//     }
//     return result
// }
// // cl(countEle([77, 55, 11, 77, 55, 11, 88, 44, 88]))


// // count of number in array using  reduce :
// // [77, 55, 11, 77, 55, 11, 88, 44, 88]

// let countEleRRR = (arr)=>{
//     return arr.reduce((acc,cv)=>{
//        if(acc[cv]){
//         acc[cv]++
//        }else{
//         acc[cv] = 1
//        }
//         return acc
//     },{})
// }
// // cl(countEleRRR([77, 55, 11, 77, 55, 11, 88, 44, 88]))

// // count number of element in array using reduce but o/p >> {{1:2},{2:3},{3:2}}

// let reduceObj  = (arr) =>{
//     return arr.reduce((acc,cv)=>{
//         if(acc[cv]){
//             acc[cv].count ++
//         }else{
//             acc[cv] = {number:cv , count:1}
//         }
//         return acc 
//     },{})
// }
// // cl(reduceObj([77, 55, 11, 77, 55, 11, 88, 44, 88]))


// // fibonacci series with normal loop

// let fibooo44 = (n)=>{
//     if(n === 1) return 0
//     if(n === 2) return 1
//     let fiboArr =[0,1]
//     for(let i =2 ; i<n ; i++){
//         let res = fiboArr[i-1] +fiboArr[i-2]
//         fiboArr.push(res)
//     }
//     return fiboArr[n-1]
// }
// cl(fibooo44(7))

// // fibonacci series using recurrsive function

// function fibocii (num){
//     if(num === 1)return 0
//     if(num === 2)return 1
//     return fibocii(num-1)+fibocii(num-2)
// }
// // cl(fibocii(7))

// // find factorial of number using recurrsive function

// function factorial44 (n){
//     if(n <=1) return 1
//     return n * factorial44(n-1)
// }
// // cl(factorial44(3))

// // find count of vowels :

// let voweeel = (str) =>{
//     // let vowels = str.match(/[aeiou]/ig);
//     let replace = str.replace(/[aeiou]/ig , "*")
//     return replace
//     // return vowels
//     // return vowels.length
// }
// // cl(voweeel("krishna"))



// // find total of all numbers in *[array]* using recurrsive :
// function total11 (arr){
//     if(arr.length === 0){
//         return 0
//     }
//     return arr[0] + total11(arr.splice(1))
// }
// // cl(total11([1,2,3,4,5]))

// // find product of all array element using recurrsive

// function product (arr){
//     if(arr.length === 0){
//         return 1
//     }
//     return arr[0] * product(arr.slice(1))
// }
// // cl(product([1,2,3,4]))


// // add 0 to n using recurrsive function :


// function addton (n){
//     if(n === 1)return 1
//     return n + addton(n-1)
// }

// // cl(addton(5))


// // array destructuring :: array destructuring, which

// let arr = [10,2,5,88];
// let [n,l,p] =arr
// // cl(n)
// // cl(l)
// // cl(p)

// let a = 4 , b= 5;
// // [a,b] =[b,a]
// // cl(a)
// // cl(b)


// //(IIFI)= imideately Invokes function expression
// //inner function must be a Anonymous >> without name
// (
//     function(name){
//         cl(`my name is ${name}`)
//     }
// )('krishna')


// // closusers example
// function outer (){
//     let name = "kshna"
//     function inner (){
//         cl(`my name is ${name}`)
//     }
//     return inner()
// }
// // cl(outer())

// // async / await
// function fetchdata (){
//   return  new Promise((resolve,reject)=>{
//         let flag = true;
//         if(flag){
//             resolve("hi dattta")
//         }else{
//             reject("error")
//         }

//     })
// }
// async function getdata() {
//     try{
//         let res = await fetchdata()
//         cl(res)
//     }catch(err){
//         cl(err)
//     }
// }
// getdata()

// // largest words in string

// let longestsss = (str)=>{
//     let long =""
//     let words = str.split(" ")
//     for(let word of words){
//         if(word.length > long.length){
//             long = word
//         }
//     }
//     return long
// }
// // cl(longestsss("kk ooo llllll ttt"))


// // remove duplicate from array using filter

// // find duplicate number in array without any inbuilt:

// // find duplicate in array using reduce ::
// // [1, 2, 3, 4, 1, 2, 3, 4]
// let dupli =(arr)=>{
//     return arr.reduce((acc,cv)=>{
//         if(!acc.includes(cv)){
//             acc.push(cv)
//         }
//         return acc
//     },[])
// }
// // cl(dupli([1,1,1,2,2,4,4,5,5,6,6,3,1]))


// // find duplicate number in array using includes :
// let dupliInc = (arr)=>{
//     let res =[];
//     for(let item of arr){
//         if(!res.includes(item)){
//             res.push(item)
//         }
//     }
//     return res

// }
// // cl(dupliInc([1, 1, 1, 2, 2, 4, 4, 5, 5, 6, 6, 3, 1]))


// // find duplicate number in array using set() method :
// // [1, 2, 3, 4, 1, 2, 3, 4]

// let setArr = (arr)=>{
//     return [...new Set(arr)]
// }
// cl(setArr([1, 1, 1, 2, 2, 4, 4, 5, 5, 6, 6, 3, 1]))

// // palindrome DSA




// // reverse string with recurrsive function
// function reverseee (str){
//     if(str === "") return ""
//     return reverseee(str.substring(1)) + str[0]
// }
// // cl(reverseee("i love u"))

// // reverse string with reverse for loop


// // reverse string with for loop



















// // console.log(25 / null) //

// // console.log([] + []) //  ""

// // let str = "i have a dog"
// // let findindex = str.indexOf('ve')
// // let newstr = str.slice(findindex, findindex+2)
// // cl(newstr)




let obj = {
    fname:"kk",
    lname:"w"
}
// let newarr = (...obj,
//     obj[aaname] = "hh")

// cl(newarr)


// const users = [
//     { id: 1, name: "Alice", age: 25, isActive: true },
//     { id: 2, name: "Bob", age: 30, isActive: false },
//     { id: 3, name: "Charlie", age: 22, isActive: true },
//     { id: 4, name: "David", age: 28, isActive: false },
//     { id: 5, name: "Eva", age: 35, isActive: true }
// ]


// let age25  =users.filter((std)=> std.age > 25)
// cl(age25)


// let req  = new XMLDocument()

// let get = 