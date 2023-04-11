let weater = fetch("")
function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById("js--clock").innerHTML =  h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
  }
  
  function checkTime(currentTime) {
    if (currentTime < 10) {currentTime = "0" + currentTime};
    return currentTime;
  }

  var request = new XMLHttpRequest();

  request.open('GET', 'http://api.weatherapi.com/v1');

  request.setRequestHeader('f52396f431bf4503858123339232703', []);

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log
  }
};
const block = document.getElementById("block");

const labels = [
  'January',
  'Februari',
  'March',
  'April',
  'May',
  'June',
];

const consoles = {
  labels: labels,
  datasets:[
      {
          label: "verbruik",
          data: [2000, 1800, 1200, 1350, 1284, 1174],
          backgroundColors: ['#13005A', '#3A1078', '#3E54AC', '#655DBB']
      }
      
  ]
}

const config = {
  type: 'doughnut',
  data: consoles,
}

const chart1 = new Chart(document.getElementById("js--grafiek1"), config);

