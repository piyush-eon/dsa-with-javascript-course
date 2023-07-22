// Strings in Javascript

// Creating Strings
const string = new String("Subscribe to RoadsideCoder!");

// using double quotes
const doubleQuote = "Subscribe to RoadsideCoder!"; 

// using single quotes
const singleQuote = 'RoadsideCoder!'; 

// using backticks
const backticks = `
Subscribe to RoadsideCoder! 
Like this Video
Share this video
`;

// Template Literals
const templateLiteral = `Subscribe to ${singleQuote}!`;

// Tagged Literals
console.log`hello ${"world"} how are ${"you"}`

// Tagged Literals Example function 
function test (string, youtubeChannel, person) {
		console.log(string,youtubeChannel, person)
    return;
}

const channel = "RoadsideCoder"
const name = "Piyush"
test`Subscribe to ${channel} run by ${name}`

// Strings length
const str = "Subscribe to RoadsideCoder!";
str.length

// Accessing Characters
str[3]
str.charAt(3)
 
// Looping
for (let i = 0; i < str.length; i++) {
    // console.log(str[i]);  
}

// Modifying Strings
str[3] = "b" // can't do this
str.replace("s","b") // replaces first instance of that character or word
str.replaceAll("e","c")// replaces all instance of that character or word

str.concat(" and share this video") // joins 2 strings
const newStr = "    Hello  World    "
newStr.trim() // removes spaces from beginning and end

// Searching
str.indexOf("Coder") // index of a character or word's first appearance

str.lastIndexOf("e") // index of a character or word's last appearance
str.indexOf("e") // index of first appearance of "e"

str.startsWith("S")
str.endsWith("!")

// Extracting Substrings
str.substring(13, 26)
str.slice(-14, -1) 

// Converting Case
const toBeConverted = {name:"Piyush"}
String(toBeConverted) // [object Object]
JSON.stringify(toBeConverted) // '{"name":"Piyush"}'

str.toUpperCase() // converts to uppercase
str.toLowerCase() // converts to lowercase

str.charCodeAt(0) // returns ASCII Code
String.fromCharCode(65) // returns character from ASCII Code

// String Comparison
const str1 = "apple"
const str2 = "apple"

str1.localeCompare(str2) // compare strings

str.includes("Subscribe") // checks if a word exists inside a string

// Splitting and Joining Strings
str.split("e")

const arr = ["apple", "banana"]
arr.join(" and ")