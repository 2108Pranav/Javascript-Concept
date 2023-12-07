function myFunc(){
    // document.getElementById('click').innerHTML = "hell";
    let x = document.getElementById('show')

    if (x.style.display === "none"){
        x.style.display = "block";
    }
    else{
        x.style.display = "none";
    }
}


let x = "sting"
console.log(x)

let y = 4545
console.log(y)


console.log(10*5)
console.log("10" == 10)

function greet(n){
    if(n == 10){
        console.log("greate the value is matched", n)
    }
    else{
        console.log("please enter the value ten ", n)
    }
}
greet(10);
greet("hello");

function user(username, age){
    return "Hi i am " + username + " and my age is " + age;
}
console.log(user("pranav", 22))

hello = () => {
    console.log("hello");
};
hello()

number => {if (number === 2) { return 5 };}

// objects

const userDetails = {
    name: "Pranv",
    age: 22,
    greet(){
        console.log("hello ,,");
        console.log(this.age)
    }
};
console.log(typeof(userDetails))
console.log(userDetails.age)
userDetails.greet()


// class

class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet(){
        console.log("hiii")
    }
}

const user1 = new User("Mehul", 34);
console.log(user1)
user1.greet()

// Array

const fruites = ['banana', 'apple', 'pineapple'];
fruites.push('cherry')
console.log(fruites)

const val = fruites.findIndex((item)=>{
    return item === 'apple'
})

console.log(val)


// map method

const maping = fruites.map((item)=>item + "?")
const mapingOn = fruites.map((item)=>({
    text: item
}))
console.log(mapingOn)
console.log(maping)

// destructuring for array

const [firstName, lastName] = ['Pranav', 'Jadav']
console.log(firstName)
console.log(lastName)

// destructuring for object

const {name: userName, age21} = {
    name: "Pranav knk",
    age21: 22
}

console.log(userName)
console.log(age21)


// spread operator

const Array1 = ['hello', 'hii']
const Array2 = ['what', 'why']

const Array3 = [...Array1, ...Array2]
console.log(Array3)

const userDetail = {
    name: "Pranv",
    age: 22,
}

const extendUser = {
    isActive: true,
    ...userDetail
}

console.log(extendUser)


// control structures

// const password = prompt('your password');

// if (password === "hello"){
//     console.log("hello world")
// }else if(password === "Hello"){
//     console.log("Hello world")
// }else{
//     console.log("access denied")
// }


for(const fruite of fruites){
    console.log(fruite)
}


// using funtions as value

function function1(){
    console.log("this is function 1")
}

const function2 = () =>{
    console.log("this is function 2")
}

setTimeout(function1, 9000)
setTimeout(function2, 400)

// function inside function

function init(){
    function greate(){
        console.log("Hello world!!!!");
    }
    greate();
}

init();