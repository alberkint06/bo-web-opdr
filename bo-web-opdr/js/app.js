const sunrise = document.getElementById("js--sunrise");
const sunset = document.getElementById("js--sunset");
const temp = document.getElementById("js--temp");
const humidity = document.getElementById("js--humidity");

let weather = fetch("https://api.open-meteo.com/v1/forecast?latitude=52.37&longitude=4.89&hourly=temperature_2m,relativehumidity_2m,rain,snowfall,cloudcover,windspeed_10m&daily=sunrise,sunset&current_weather=true&timezone=auto&current_weather=true&forecast_days=1")
    .then(function(response){
        return response.json();
    })
    .then(function(realData){
        const today = new Date();
        let h = today.getHours();
        console.log(realData);

        const sunriseRise = realData.daily.sunrise[0];
        sunrise.innerText = sunriseRise.slice(11,16) + " /";

        const sunsetSet = realData.daily.sunset[0]; 
        sunset.innerText = sunsetSet.slice(11, 16);

        temp.innerHTML = realData.current_weather.temperature + "°C";
        humidity.innerHTML = realData.hourly.relativehumidity_2m[h];
    });


function startTime(){
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById("js--clock").innerHTML =  h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
  }
  
  function checkTime(currentTime){
    if (currentTime < 10) {
        currentTime = "0" + currentTime;
    }
    return currentTime;
  }
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