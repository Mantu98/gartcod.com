var imageSources = ["crome.svg", "desktop.6a735a94.svg", "mobile.548cdf6e.svg"];
var color = ["rgba(244, 204, 3, 0.904)", "#fff", "rgba(147, 77, 2, 0.904)"];

var index = 0;
setInterval (function(){
  if (index === imageSources.length) {
    index = 0;
  }
 let ele = document.getElementById("image");
  ele.src = imageSources[index];
  let element = document.getElementById("color1");
  let element1 = document.getElementById("color2");
  let days = document.getElementById("day");
  let hours = document.getElementById("hour");
  let minutes = document.getElementById("minute");
  let seconds = document.getElementById("second");
  let Btn = document.getElementById("btn");
  element.style.color = color[index];
  element1.style.color = color[index];
  days.style.color = color[index];
  hours.style.color = color[index];
  minutes.style.color = color[index];
  seconds.style.color = color[index];
  Btn.style.backgroundColor = color[index];
  index++;
} , 2000);



 const targetDate = new Date("December 31, 2023 23:59:59").getTime();

 const countdownInterval = setInterval(updateCountdown, 1000);

 function updateCountdown() {
     // Get the current date and time
     const currentDate = new Date().getTime();

     // Calculate the remaining time in milliseconds
     const remainingTime = targetDate - currentDate;

     // Calculate days, hours, minutes, and seconds
     const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
     const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
     const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
     const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

     // Display the countdown in the HTML elements
     document.getElementById('days').innerText = days;
     document.getElementById('hours').innerText = hours;
     document.getElementById('minutes').innerText = minutes;
     document.getElementById('seconds').innerText = seconds;

     // Check if the countdown has reached zero
     if (remainingTime < 0) {
         clearInterval(countdownInterval);
         document.getElementById('countdown').innerHTML = '<div>Countdown expired!</div>';
     }
 }