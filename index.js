/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/
function greet(time){
  let timeArray = time.split(":") 
  let hour = parseFloat(timeArray[0])
  if  (hour < 12){
    return 'Good Morning'}
    else if (hour > 17){ return 'Good Evening'}
    else if ( 12 < hour && hour < 17){ return 'Good Afternoon'}

   }

function displayMessage(string){
  document.querySelector("#greeting").innerText = string
  return
}
/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
