const prompt = require("prompt-sync")();
const speed = parseInt(prompt("Enter the speed of the car (in km/s):"));

if (isNaN(speed) || speed < 0) {
  console.log("Invalid input. Please enter a non-negative number.");
} else {
  let demeritPoints = 0;

  if (speed > 70) {
    demeritPoints = Math.floor((speed - 70) / 5);
  }

  if (demeritPoints > 12) {
    console.log("License suspended.");
  } else {
    console.log(`Points: ${demeritPoints}`);
  }
}