/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time) {
  const hour = parseInt(time, 10);
  if (hour < 12) return "Good Morning"
  if (hour > 17) return "Good Evening"
  return "Good Afternoon"
}
  //{
  //let timeArray = time.split(":")
  //let hour = parseFloat(timeArray[0])
  //if (hour === NaN) {
    //return "Incorrect format"
  //}
  //else if (hour < 12) {
    //return "Good Morning"
  //}
  //else if (hour > 17) {
    //return "Good Evening"
  //}
  //else if (hour >= 12 && <= 17) {
    //return "Good Afternoon"
  //}
//}
/* Write your implementation of displayMessage() */
function displayMessage(msg) {
  document.getElementById("greeting").innerText = msg; 
}
