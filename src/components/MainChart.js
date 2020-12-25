import React, { useContext } from "react";
import { stockdata } from "../data";
import { Radar } from "react-chartjs-2";
import { store } from "../store";

const MainChart = () => {
  const global = useContext(store);
  const { State } = global;

  const extractLabel = (dataset) => {
    let labelArr = [];
    let data = [];
    // eslint-disable-next-line array-callback-return
    dataset.map((item) => {
      if (item[State.radio] !== "" && !labelArr.includes(item[State.radio])) {
        labelArr.push(item[State.radio]);
        data.push(item[State.measure]);
      }
      if (
        labelArr.includes(item[State.radio]) &&
        data[labelArr.indexOf(item[State.radio])] < item[State.measure]
      ) {
        data[labelArr.indexOf(item[State.radio])] = item[State.measure];
      }
    });
    return [labelArr, data];
  };

  const options = {
    responsive: true,
    scale: {
      ticks: {
        beginAtZero: true,
        max: 100,
        step: 10,
      },
    },
  };

  let jsondata = extractLabel(stockdata);

  const data = {
    labels: jsondata[0],
    datasets: [
      {
        label: "data",
        backgroundColor: "rgba(53, 156, 240,0.5)",
        borderColor: "rgba(53, 115, 240,0.8)",
        pointBackgroundColor: "rgba(24, 133, 242,1)",
        pointBorderColor: "#1f18f2",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(179,181,198,1)",
        data: jsondata[1],
      },
    ],
  };

  return (
    <div className="mainchart">
      <Radar data={data} options={options} width={400} />
    </div>
  );
};

export default MainChart;
