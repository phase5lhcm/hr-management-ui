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
        backgroundColor: "aqua",
        borderColor: "black",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div style={{ height: "16rem" }}>
      {" "}
      <Bar data={data}></Bar>
    </div>
  );
};

export default EmployeesByDeptBarChart;
