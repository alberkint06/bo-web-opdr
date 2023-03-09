newFunction();

function newFunction() {
    <><script
        src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.js">
    </script><canvas id="myChart" style="width:100%;max-width:700px"></canvas></>;
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
