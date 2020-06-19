/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}


/* End Given Code, don't edit above here...*/
// let today = new Date();
// let time = today.getHours() + ":" + today.getMinutes();
function greet(time){
  let timeSplit = time.split(':')
  let timeNumber = parseInt(timeSplit[0])
if ( timeNumber < 12 ){
  return "Good Morning";
}
if (timeNumber >= 12 && timeNumber < 17 ){
return "Good Afternoon";
}
if (timeNumber >= 17){
  return "Good Evening";
  }

}

function displayMessage(message){
  document.getElementById('greeting').innerText = message
 
  
}

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
