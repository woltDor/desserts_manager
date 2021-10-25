import { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import { Empty, Divider } from "antd";

const PieChart = () => {
  const [labels, setLabels] = useState([]);
  const [values, setValues] = useState([]);

  useEffect(() => {
    const StringDesserts = localStorage.getItem("desserts");
    const allDesserts = JSON.parse(StringDesserts);
    setLabels(Object.keys(allDesserts));
    setValues(Object.keys(allDesserts).map((key) => allDesserts[key]));
  }, []);

  const state = {
    labels: labels,
    datasets: [
      {
        label: "Desserts",
        backgroundColor: [
          "#B21F00",
          "#C9DE00",
          "#2FDE00",
          "#00A6B4",
          "#6800B4",
          "#4b77a9",
          "#5f255f",
          "#d21243",
          "#B27200",
        ],
        hoverBackgroundColor: [
          "#501800",
          "#4B5000",
          "#175000",
          "#003350",
          "#35014F",
        ],
        data: values,
      },
    ],
  };
  return (
    <>
      <Divider orientation="center">Statistics</Divider>
      {labels.length > 0 ? (
        <div style={styles.pieContainer}>
          <Pie
            data={state}
            options={{
              title: {
                display: true,
                text: "Split Desserts Order",
                fontSize: 50,
              },
              legend: {
                display: true,
                position: "right",
              },
            }}
          />
        </div>
      ) : (
        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
      )}
    </>
  );
};

const styles = {
  pieContainer: {
    width: "40%",
    height: "40%",
    top: "35%",
    left: "50%",
    position: "absolute",
    transform: "translate(-50%, -50%)",
  },
};

export default PieChart;
