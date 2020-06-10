var eventType = document.querySelector("#event-type"); 
var mouseEventsEl = document.querySelector("#click-events");
var keyEventsEl = document.querySelector("#key-events");

//function to toggle between "KEYDOWN and MOUSE EVENT"
function toggleDisplay(event) {
  var value = event.target.value;
  if(value === "keydown") {
    mouseEventsEl.classList.add("hide");
    keyEventsEl.classList.remove("hide");
  }
  else {
    mouseEventsEl.classList.remove("hide");
    keyEventsEl.classList.add("hide");
  }
}

//functin to identify "KEYDOWN EVENT"
function keydown(event) {
  var keyPress = event.key;
  var keyCode = event.code;
  document.querySelector("#key").innerHTML = keyPress;
  document.querySelector("#code").textContent = keyCode;
  document.querySelector("#status").textContent = "KEYDOWN Event";
}

//function to identify "KEYUP EVENTS"
function keyup(event){
document.querySelector("#status").textContent = "KEYUP Event";
}

//function to examine 'CLICK EVENT'
function click(event){
  event.preventDefault();
  var target = event.target.textContent;
  var x = event.clientX;
  var y = event.clientY;
  document.querySelector("#target").textContent = target;
  document.querySelector("#x").textContent = x;
  document.querySelector("#y").textContent = y;
}

//EVENT LISTENERS
document.addEventListener("keydown", keydown);
document.addEventListener("keyup", keyup);
document.addEventListener("click", click);
eventType.addEventListener("change", toggleDisplay);