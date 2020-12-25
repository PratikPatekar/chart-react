import React, { useContext } from "react";
import ChartTop from "./components/ChartTop";
import MainChart from "./components/MainChart";
import Chart from "./components/Chart";
import Feedback from "./components/Feedback";
import Guide from "./components/Guide";
import { store } from "./store";

const App = () => {
  const global = useContext(store);
  const { State, setState } = global;

  const toggleSidebar = () => {
    setState({ Side: !State.Side });
  };

  const sidebarLinks = [
    { name: "Chart", comp: Chart },
    { name: "Quick Guide", comp: Guide },
    { name: "Feedback", comp: Feedback },
  ];

  let ComponentName = sidebarLinks[State.DivNum].comp;

  const renderComp = (e) => {
    const index = e.target.getAttribute("data-index");
    setState({ DivNum: index });
  };

  return (
    <div className="App container top-main">
      <div className="top mb-5">
        <ChartTop />
      </div>
      <div className="chart-div wrapper mt-5">
        <div className={State.Side ? "" : "active"} id="sidebar">
          <nav id="sidebar" className="d-flex flex-column container">
            <div className="dismiss">
              <button
                type="button"
                className="btn btn-info btn-circle dismiss-button"
                onClick={toggleSidebar}
              >
                <span
                  className="iconify"
                  data-icon="ant-design:close-outlined"
                  data-inline="false"
                  data-width="30"
                  data-height="30"
                ></span>
              </button>
            </div>

            <div className="row p-0 my-3 mx-1">
              {sidebarLinks.map((item, index) => {
                return (
                  <div className="col-4 p-0" key={index}>
                    <button
                      type="button"
                      className="btn btn-light btn-block px-0 sidebar-link"
                      onClick={renderComp}
                      data-index={index}
                    >
                      {item.name}
                    </button>
                  </div>
                );
              })}
            </div>

            <div className="d-flex flex-column">
              {<ComponentName toggle={toggleSidebar} />}
            </div>
          </nav>
        </div>
        <div id="content">
          <div className="chart-top">
            <button
              type="button"
              className="btn btn-secondary sidebar-btn"
              onClick={toggleSidebar}
              style={State.Side ? { display: "none" } : {}}
            >
              Customize
            </button>
          </div>
          <div className="chart-body">
            <MainChart />
          </div>
          <div className="chart-bottom">
            <button type="button" className="btn btn-secondary">
              Load Less
            </button>
          </div>
        </div>
        {/* <div className={State.Side ? "overlay-active" : "overlay"}></div> */}
      </div>
    </div>
  );
};

export default App;
