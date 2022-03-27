function getCurrentTime() {
  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();
  var ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  var strTime = hours + ":" + minutes + ":" + seconds + " " + ampm;
  return strTime;
}

function getSalutation() {
  var today = new Date();
  var curHr = today.getHours();

  if (curHr < 12) {
    return "Good Morning,";
  } else if (curHr < 18) {
    return "Good Afternoon,";
  } else {
    return "Good Evening,";
  }
}

module.exports = {
  getCurrentTime,
  getSalutation,
};
