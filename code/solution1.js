const prompt = require("prompt-sync")();
const marks = parseInt(prompt("Enter your mark (between 0 and 100):")); 

if (isNaN (marks) || marks < 0 || marks >100) {
    console.log("invalid mark. please enter a mark between 0 and 100.");
} else {
    let grade;
    if (marks > 79){
        grade = "A";
    } else if (marks >= 60){
        grade = "B";
    } else if (marks >= 49) {
        grade = "C";
    } else if (marks >= 40) {
        grade = "D";
    } else {
        grade = "E";
    }
    console.log(`your grade is ${grade}.`)
}