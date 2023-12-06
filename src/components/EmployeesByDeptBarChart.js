import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const EmployeesByDeptBarChart = () => {
  //chart data
  const data = {
    labels: [
      "Medicine",
      "Research",
      "Human Resources",
      "Facilities",
      "Administrative",
    ],
    datasets: [
      {
        label: "Total Employees by Department",
        data: [1933, 2000, 250, 358, 3670],
        backgroundColor: "blue",
        borderColor: "black",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        labels: {
          color: "#032A49", // Change dataset label color
        },
      },
    },
  };

  return (
    <div
      style={{
        height: "16rem",
        boxShadow:
          " 5px 0px 25px -5px rgba(0, 0, 0, 0.3), -5px 0px 25px -5px rgba(0, 0, 0, 0.3)",
        borderRadius: "8px",
      }}
    >
      {" "}
      <Bar data={data} options={options}></Bar>
    </div>
  );
};

export default EmployeesByDeptBarChart;
