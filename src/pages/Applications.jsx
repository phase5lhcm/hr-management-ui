import { Link } from "react-router-dom";

function Applications() {
  return (
    <div style={{ textAlign: "center" }}>
      <p>Hello World</p>
      <Link to="applications">Click to view your application progress</Link>
    </div>
  );
}

export default Applications;
