const weather = "https://api.open-meteo.com/v1/forecast?latitude=52.37&longitude=4.89&hourly=temperature_2m"

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

  function newFunction() {
      <><script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.js"></script><canvas id="myChart" style="width:100%;max-width:700px"></canvas></>;
      var xValues = ["Water", "Gas", "Light", "electricity"];
      var yValues = [28, 23, 27, 22];
      var barColors = ["blue", "grey", "yellow", "green"];
      var myChart = new myChart("myChart", {
          type: "bar",
          data: {
              labels: xValues,
              datasets: [{
                  backgroundColor: barColors,
                  data: yValues
              }]
          },
      });
  }