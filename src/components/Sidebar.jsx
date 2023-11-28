import React from "react";
import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText,
} from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTableColumns,
  faPerson,
  faChartLine,
  faPen,
  faGear,
} from "@fortawesome/free-solid-svg-icons";

function Sidebar() {
  return (
    <>
      <SideNav
        onSelect={(selected) => {
          console.log(`This page is selected ${selected}`);
        }}
        className="sideNav"
      >
        <SideNav.Toggle />
        <SideNav.Nav defaultSelected="dashboard">
          <NavItem eventKey="dashboard">
            <NavIcon>
              <FontAwesomeIcon
                icon={faTableColumns}
                style={{ fontSize: "1.5em" }}
              />
            </NavIcon>
            <NavText>Dashboard</NavText>
          </NavItem>
          <NavItem eventKey="applicant tracker">
            <NavIcon>
              <FontAwesomeIcon
                icon={faChartLine}
                style={{ fontSize: "1.5em" }}
              />
            </NavIcon>
            <NavText>Applicant Tracker</NavText>
          </NavItem>
          <NavItem eventKey="employee profiles">
            <NavIcon>
              <FontAwesomeIcon icon={faPerson} style={{ fontSize: "1.5em" }} />
            </NavIcon>
            <NavText>Employees</NavText>
          </NavItem>
          <NavItem eventKey="communications">
            <NavIcon>
              <FontAwesomeIcon icon={faPen} style={{ fontSize: "1.5em" }} />
            </NavIcon>
            <NavText>Communications</NavText>
          </NavItem>
          <NavItem eventKey="settings">
            <NavIcon>
              <FontAwesomeIcon icon={faGear} style={{ fontSize: "1.5em" }} />
            </NavIcon>
            <NavText>Settings</NavText>
          </NavItem>
        </SideNav.Nav>
      </SideNav>
    </>
  );
}

export default Sidebar;
