import React from "react";
import Header from "./Header";
import "../css/Filter.css";
function Filter() {
  return (
    <>
      <Header />
      <div className="container p-2">
        <h1>Breakfast Place in Mumbai</h1>
        <div className="row">
          <div className="col-lg-3">
            <div className="p-2">
              <h4>Filters</h4>
              <div>
                <label htmlFor="location" className="mb-1 text-muted">Select Location</label>
                <select
                  name="location"
                  id="location"
                  className="form-select"
                ></select>
              </div>
            </div>
          </div>
          <div className="col-lg-9">
            <div className="p-2"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Filter;
