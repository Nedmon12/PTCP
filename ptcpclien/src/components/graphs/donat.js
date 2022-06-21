import React from "react";
import Chart from "chart.js";

export default function DonatBarChart() {
  React.useEffect(() => {
    let config = {
      type: 'doughnut',
      data: {
        labels: [
          'Class Activity',
          'Hand Writing',
          'Class Disturbance'
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [300, 50, 100],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],
          hoverOffset: 4
        }]
      }
            };
    let ctx = document.getElementById("donat-chart").getContext("2d");
    window.myBar = new Chart(ctx, config);
  }, []);
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white h-[60vh] w-full mb-6 shadow-lg rounded">
        <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full max-w-full flex-grow flex-1">
              <h6 className="uppercase text-blueGray-400 mb-1 text-xs font-semibold">
                Behavior By Catagories
              </h6>
              <h2 className="text-blueGray-700 text-xl font-semibold">
                Total Point
              </h2>
            </div>
          </div>
        </div>
        <div className="p-4 flex-auto">
          {/* Chart */}
          <div className="relative ml-60 center flex justify-center w-[90vh] h-[100vh]">
            <canvas className="" id="donat-chart"></canvas>
          </div>
        </div>
      </div>
    </>
  );
}