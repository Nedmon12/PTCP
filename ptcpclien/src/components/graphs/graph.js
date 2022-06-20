import React from "react";
import Chart from "chart.js";

export default function CardLineChart() {
  React.useEffect(() => {
    var config = {
      type: "line",
      data: {
        labels: [
          "September",
          "october",
          "November",
          "December",
          "january",
          "February",
          "March",
          "April",
          "May",
          "June",
          
        ],
        datasets: [
          {
            label: "Negative/bad",
            backgroundColor: "#FF000",
            borderColor: "#FF0000",
            data: [3, 2, 1, 5, 4, 3, 4, 5, 3 ,1],
            fill: false,
          },
          {
            label: "great/Postive",
            fill: false,
            backgroundColor: "#00FF00",
            borderColor: "#00FF00",
            data: [1, 4, 2, 3, 4, 5, 1, 5, 4, 3],
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        title: {
          display: false,
          text: "Behaviour Comparision",
          fontColor: "black",
        },
        legend: {
          labels: {
            fontColor: "black",
          },
          align: "end",
          position: "bottom",
        },
        tooltips: {
          mode: "index",
          intersect: false,
        },
        hover: {
          mode: "nearest",
          intersect: false,
        },
        scales: {
          xAxes: [
            {
              ticks: {
                fontColor: "black",
              },
              display: true,
              scaleLabel: {
                display: false,
                labelString: "Month",
                fontColor: "black",
              },
              gridLines: {
                display: false,
                borderDash: [2],
                borderDashOffset: [2],
                color: "rgba(33, 37, 41, 0.3)",
                zeroLineColor: "rgba(0, 0, 0, 0)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                fontColor: "black",
              },
              display: true,
              scaleLabel: {
                display: false,
                labelString: "Value",
                fontColor: "black",
              },
              gridLines: {
                borderDash: [3],
                borderDashOffset: [3],
                drawBorder: false,
                fontColor: "black",
                zeroLineColor: "rgba(33, 37, 41, 0)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
        },
      },
    };
    var ctx = document.getElementById("line-chart").getContext("2d");
    window.myLine = new Chart(ctx, config);
  }, []);
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-blueGray-700">
        <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full max-w-full flex-grow flex-1">
              <h6 className="uppercase text-blueGray-100 mb-1 text-xs font-semibold">
                Behaviour
              </h6>
              <h2 className="text-Black text-xl font-semibold">Point Comparision</h2>
            </div>
          </div>
        </div>
        <div className="p-4 flex-auto">
          {/* Chart */}
          <div className="relative h-[40vh]">
            <canvas id="line-chart"></canvas>
          </div>
        </div>
      </div>
    </>
  );
}