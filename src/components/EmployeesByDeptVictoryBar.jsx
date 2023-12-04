import {
  VictoryAxis,
  VictoryBar,
  VictoryChart,
  VictoryTheme,
  VictoryLegend,
} from "victory";
import data from "../util/EmployeesByDept";

const TotalEmployeeCount = () => {
  const employeesByDepartment = data;

  return (
    <>
      <div
        style={{
          textAlign: "center",
          paddingTop: "1rem",
          textDecoration: "underline black",
        }}
      >
        <h5>Employees By Department</h5>
      </div>
      <VictoryChart
        domainPadding={80}
        theme={VictoryTheme.material}
        width={2200}
        height={700}
      >
        <VictoryAxis
          tickValues={[1, 2, 3, 4, 5]}
          tickFormat={["Research", "Medicine", "HR", "Facilities", "Admin"]}
        />
        <VictoryAxis
          dependentAxis
          // tickFormat specifies how ticks should be displayed
          tickFormat={(x) => `${x / 1000}`}
        />
        <VictoryBar
          data={employeesByDepartment}
          x="department"
          y="employees"
          style={{
            data: { fill: "blue" },
            fontSize: "80rem",
          }}
        />
      </VictoryChart>
    </>
  );
};

export default TotalEmployeeCount;
