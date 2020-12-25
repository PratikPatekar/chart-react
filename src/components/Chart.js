import React, { useContext } from "react";
import { store } from "../store";

const Chart = ({ toggle }) => {
  // const years = [1, 2, 3, 4];

  const global = useContext(store);
  const { State, setState } = global;

  const handleFormInput = (event) => {
    const { name, value } = event.target;
    setState({ [name]: value });
  };

  return (
    <div>
      <form className="container">
        <div className="row p-0 mx-1 my-2">
          <div className="col-12 p-0 d-flex">
            {/* col-7  (col-1)*5 */}
            <span className="mx-auto mt-1">
              Random Form to change Chart Attributes
            </span>
          </div>
          {/* <div className="col-1 sidebar-data p-0">
            <button type="button" className="btn btn-block btn-secondary">
              All
            </button>
          </div>
          {years.map((item, index) => {
            return (
              <div className="col-1 sidebar-data p-0" key={index}>
                <button type="button" className="btn btn-block btn-secondary">
                  {item}
                </button>
              </div>
            );
          })} */}
        </div>

        <div className="col-12 mt-3 mb-2">
          <h6 className="text-center">Year Range</h6>
        </div>

        <div className="col-12 range-field w-100 mx-auto">
          <label className="slider mx-auto text-center">
            2020-{State.slider}
          </label>
          <input
            id="slider"
            className="border-0"
            type="range"
            min="2020"
            max="2060"
            name="slider"
            onChange={handleFormInput}
          />
        </div>

        <div className="row my-3">
          <div className="col-7 my-2 card shadow-sm p-1">
            <span>
              <b>Filter</b>
            </span>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="radio"
                id="Radios1"
                value="topic"
                onChange={handleFormInput}
              />
              <div className="form-group">
                <label>Topic</label>
                <select
                  className="form-control"
                  id="select1"
                  name="topic_data"
                  onChange={handleFormInput}
                  defaultValue={State.topic_data}
                >
                  <option value="">All</option>
                </select>
              </div>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="radio"
                id="Radios2"
                value="sector"
                onChange={handleFormInput}
                defaultChecked
              />
              <div className="form-group">
                <label>Sector</label>
                <select
                  className="form-control"
                  id="select1"
                  name="sector_data"
                  onChange={handleFormInput}
                  defaultValue={State.sector_data}
                >
                  <option value="">All</option>
                </select>
              </div>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="radio"
                id="Radios3"
                value="region"
                onChange={handleFormInput}
              />
              <div className="form-group">
                <label>Region</label>
                <select
                  className="form-control"
                  id="select1"
                  name="region_data"
                  onChange={handleFormInput}
                  defaultValue={State.region_data}
                >
                  <option value="">All</option>
                </select>
              </div>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="radio"
                id="Radios4"
                value="pestle"
                onChange={handleFormInput}
              />
              <div className="form-group">
                <label>PEST</label>
                <select
                  className="form-control"
                  id="select1"
                  name="pest_data"
                  onChange={handleFormInput}
                  defaultValue={State.pest_data}
                >
                  <option value="">All</option>
                </select>
              </div>
            </div>
          </div>

          <div className="col-5 my-1">
            <div className="form-group">
              <label>Measure</label>
              <select
                className="form-control"
                id="select5"
                name="measure"
                onChange={handleFormInput}
                defaultValue={State.intensity}
              >
                <option value="intensity">Intensity</option>
                <option value="relevance">Relevance</option>
                <option value="likelihood">Likelihood</option>
              </select>
            </div>
            <div className="form-group">
              <label>Source</label>
              <select
                className="form-control"
                id="select6"
                name="source"
                onChange={handleFormInput}
                defaultValue={State.source}
              >
                <option value="">All</option>
              </select>
            </div>
            <div className="form-group">
              <label>SWOT</label>
              <select
                className="form-control"
                id="select7"
                name="swot"
                onChange={handleFormInput}
                defaultValue={State.swot}
              >
                <option value="">All</option>
              </select>
            </div>
            <div className="form-group">
              <label>Confidence</label>
              <select
                className="form-control"
                id="select8"
                name="confidence"
                onChange={handleFormInput}
                defaultValue={State.confidence}
              >
                <option value="95">95%</option>
                <option value="50">50%</option>
                <option value="75">75%</option>
                <option value="25">25%</option>
                <option value="100">100%</option>
              </select>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-6">
            <button
              type="button"
              className="p-2 btn btn-warning btn-block bottom-btn"
              onClick={toggle}
            >
              Some button
            </button>
          </div>
          <div className="col-6">
            <button
              type="button"
              className="p-2 btn btn-secondary btn-block bottom-btn"
            >
              Some other button
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Chart;
