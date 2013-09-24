var timerEndtime = 0;
var clockElem = null;
var clockInterval = null;
var baseClockStyle = "position: relative; text-align: right; z-index: 999; font-size: 1000%; ";

function setupTimer() {
  if(!clockElem == null) {
    clockElem.parentNode.removeChild(clockElem);
    clockElem = null;
  }

  if(!clockInterval == null) {
    window.clearInterval(clockInterval);
    clockInterval = null;
  }

  var fullscreen = document.getElementsByClassName("punch-full-window-overlay")[0];
  clockElem = document.createElement("div");
  clockElem.id = "clock"
  clockElem.style.cssText = baseClockStyle + "color: grey"
  fullscreen.contentDocument.body.appendChild(clockElem);
  clockElem.textContent = "5:00";

  fullscreen.contentDocument.onkeypress = function (key){ resetTimer(key); };
}

function resetTimer(evt) {
  if(evt.keyCode == 46) {
    timerEndtime = (new Date().getTime() / 1000) + 5 * 60
    clockInterval = window.setInterval(function() { updateTimer() }, 1000);
  }
}

function updateTimer() {
  var timeRemaining = timerEndtime - (new Date().getTime() / 1000)

  if(timeRemaining > 0) {
  var secondsRemaining = Math.round(timeRemaining % 60);
  var minutesRemaining = Math.floor(timeRemaining / 60);

  if(secondsRemaining > 55) {
	clockElem.style.cssText = baseClockStyle + "color: grey"
  } else if( minutesRemaining == 0 && secondsRemaining < 30) {
	clockElem.style.cssText = baseClockStyle + "color: red"
  } else {
	clockElem.style.cssText = baseClockStyle + "color: grey; opacity: 0.3"
  }

       if(secondsRemaining < 10) {
         secondsRemaining = "0" + secondsRemaining;
       } else if (secondsRemaining == 60) {
         secondsRemaining = "00"
       }
  clockElem.textContent = minutesRemaining + ":" + secondsRemaining;
  } else {
    clockElem.textContent = "0:00";
    window.clearInterval(clockInterval);
    clockInterval = null;
  }
}

document.body.onresize = function (evt) {
  var fullscreenFrames = document.getElementsByClassName("punch-full-window-overlay")

  if(fullscreenFrames.length != 0) {
  	fullscreenFrames[0].onload = function() { setupTimer(); };
  } else {
    if(!clockInterval == null) {
      window.clearInterval(clockInterval);
      clockInterval = null;
    }
  }
}
