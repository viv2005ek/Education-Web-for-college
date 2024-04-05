git statusfunction updateClock() {
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();
  var timeString = formatTime(hours) + ":" + formatTime(minutes);
  document.getElementById("time").innerHTML = timeString;
}

function formatTime(time) {
  return time < 10 ? "0" + time : time;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initial call to display the clock
updateClock();

//forLoader
const forLoaderBody=document.body.querySelector(".forLoaderBody");
const containerLoader=document.body.querySelector(".banter-loader");

window.addEventListener("load",(e)=>{
  containerLoader.style.display="none";
  forLoaderBody.classList.remove("forLoaderBody");
})


//toggle button for side bar
function scrollbarVisibility() {
  const sideBar = document.body.querySelector(".side_bar");
  sideBar.classList.toggle("scrollbarVisibility");
}


function calanderData(pageName) {
  var currentUrl = window.location.href;
  var baseUrl = currentUrl.substring(0, currentUrl.lastIndexOf("/") + 1);
  var targetUrl = baseUrl + pageName;

  window.location.href = targetUrl;
}





