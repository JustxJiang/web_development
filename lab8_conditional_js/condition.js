console.log("Justen Jiang")
console.log("==== Example 1 ====")
let day = true

if(day){
    console.log("Good morning!")
}

console.log("==== Example 2: if-else statement ====")

let n1 = 8, n2 = 8
if (n1===n2){
    console.log("They are equal")
}
else{
    console.log("They are different")
}

console.log("==== Example 3: multiway condition statement ====")
// check if a number is positive, negative, or zero 
let number = 0;
if (number > 0){
    console.log(`Number ${number} is positive`)
}
else if(number < 0){
    console.log(`Number ${number} is negative`)
}

else if(number === 0){
    console.log("The number is zero")
}

else{
    console.log(`${number} is undefined!`)
}

console.log("==== Example 4: multiway condition statement in prompt function ====")
// check if user enters a number, didn't enter anything, or pressed cancel button
let n = prompt("Enter a number")
console.log(n)
if (n===null){
    console.log("Cancel was pressed")
}
else if(n==""){
    console.log("Ok button was pressed  ")
}
else if(isNaN(n)){ // isNaN (not a number)
    console.log(`${n} is a string`)
}
else{
    console.log(`${n} is a number`)
}

console.log("==== Example 5: nested conditional statement ====")
// check if a password has at least 6+ characters and no space 
let password = prompt("Enter a password")

// to find the number of characters in a string, we use the method .length
if (password.length >= 6){
    console.log(`Password ${password} has ${password.length} characters`)
    if (password.indexOf(" ") === -1){
        console.log(`Password ${password} has NO SPACE`)
    }
    else{
        console.log(`Password ${password} HAS SPACE`)
    }
}
else{
    console.log(`Password ${password} has less than 6 characters`)
}

console.log("==== Exercise ====")
let value = prompt("Enter a value")
if (isNaN(value)){
    console.log(`${value} is a string.`)
}
else{
    if (value > 0){
        console.log(`${value} is positive`)
    }
    else if(value < 0){
        console.log(`${value} is negative`)
    }
    
    else if(value === 0){
        console.log("The number is zero")
    }
    else{
        console.log("Undefined")
    }
}

let color = prompt("Select a color using lowercase or uppercase character (r/R for red)")
switch(color){
    case ("r" || "R"): 
        console.log("You selected red color")
        break
    case ("b" || "B"): 
        console.log("You selected blue color")
        break
    default: 
        console.log("Color is not in the list!")
}

console.log("==== Examble 6: lists ====")
let colors = ["red", "olive", "orange", "babyblue", "hotpink"]
// all lists have an index number that starts with 0 (leftmost)
console.log(`The third color is ${colors[2]}`)
let selectcolor = prompt("Examble 6: select a color using an index number")
switch(selectcolor){
    case "0":
        console.log(`Selected color = ${colors[0]}`)
        break
    case "1": 
        console.log(`Selected color = ${colors[1]}`)
        break
    case "2":
        console.log(`Selected color = ${colors[2]}`)
        break
    case "3": 
        console.log(`Selected color = ${colors[3]}`)
        break
    case "4": 
        console.log(`Selected color = ${colors[4]}`)
        break
    default: 
        console.log("Color is not in the list")
}

console.log("==== Examble 7: string ====")
let greeting = "Good evening"
console.log(`The seventh character ${greeting[6]}`)