import React from "react";
import Header from "./Header";
import "../css/Filter.css";
import Card from "./Card";
function Filter() {
  return (
    <>
      <Header />
      <div className="container filter p-2">
        <h1>Breakfast Place in Mumbai</h1>
        <div className="row">
          <div className="col-lg-3">
            <div className="p-3 px-4 shadow-lg">
              <h4>Filters</h4>
              <div className="mt-3">
                <label
                  htmlFor="location"
                  className="mb-1 text-muted fs-6 fw-semibold"
                >
                  Select Location
                </label>
                <select
                  name="location"
                  id="location"
                  className="form-select"
                ></select>
              </div>
              <div className="mt-3">
                <h6 className="text-muted fs-6 fw-semibold">Cuisines</h6>
                <div className="form-check">
                  <label htmlFor="north_indian" className="form-check-lable">
                    <input
                      type="checkbox"
                      id="north_indian"
                      className="form-check-input"
                    />
                    North Indian
                  </label>
                </div>
                <div className="form-check">
                  <label htmlFor="south_indian" className="form-check-lable">
                    <input
                      type="checkbox"
                      id="south_indian"
                      className="form-check-input"
                    />
                    South Indian
                  </label>
                </div>
                <div className="form-check">
                  <label htmlFor="Chinese" className="form-check-lable">
                    <input
                      type="checkbox"
                      id="Chinese"
                      className="form-check-input"
                    />
                    Chinese
                  </label>
                </div>
                <div className="form-check">
                  <label htmlFor="fast_food" className="form-check-lable">
                    <input
                      type="checkbox"
                      id="fast_food"
                      className="form-check-input"
                    />
                    Fast Food
                  </label>
                </div>
                <div className="form-check">
                  <label htmlFor="street_food" className="form-check-lable">
                    <input
                      type="checkbox"
                      id="street_food"
                      className="form-check-input"
                    />
                    Street Food
                  </label>
                </div>
              </div>
              <div className="mt-3">
                <h6 className="text-muted fs-6 fw-semibold">Cost For Two</h6>
                <div className="form-check">
                  <label htmlFor="less_than_500" className="form-check-lable">
                    <input
                      type="checkbox"
                      id="less_than_500"
                      className="form-check-input"
                    />
                    less than 500
                  </label>
                </div>
                <div className="form-check">
                  <label htmlFor="500_to_1000" className="form-check-lable">
                    <input
                      type="checkbox"
                      id="500_to_1000"
                      className="form-check-input"
                    />
                    500 to 1000
                  </label>
                </div>
                <div className="form-check">
                  <label htmlFor="1000_to_1500" className="form-check-lable">
                    <input
                      type="checkbox"
                      id="1000_to_1500"
                      className="form-check-input"
                    />
                    1000 to 1500
                  </label>
                </div>
                <div className="form-check">
                  <label htmlFor="1500_to_2000" className="form-check-lable">
                    <input
                      type="checkbox"
                      id="1500_to_2000"
                      className="form-check-input"
                    />
                    1500 to 2000
                  </label>
                </div>
                <div className="form-check">
                  <label htmlFor="2000+" className="form-check-lable">
                    <input
                      type="checkbox"
                      id="2000+"
                      className="form-check-input"
                    />
                    2000+
                  </label>
                </div>
              </div>
              <div className="mt-3">
                <h6 className="text-muted fs-6 fw-semibold">Sort</h6>
                <div className="form-check">
                  <label htmlFor="low_to_high" className="form-check-lable">
                    <input
                      type="radio"
                      id="low_to_high"
                      name="sort"
                      className="form-check-input"
                    />
                    Price Low To High
                  </label>
                </div>
                <div className="form-check">
                  <label htmlFor="high_to_low" className="form-check-lable">
                    <input
                      name="sort"
                      type="radio"
                      id="high_to_low"
                      className="form-check-input"
                    />
                    Price High To Low
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-9 col-12">
            <div>
              <Card title="The Big Chill Cakery" />
              <Card title="The Bake Shop" />
            </div>
            <div className="page-button d-flex justify-content-center gap-3 mt-5">
              <button
                type="button"
                className="btn btn-outline-secondary btn-sm "
              >
                <i className="bi bi-chevron-left"></i>
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary btn-sm "
              >
                1
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary btn-sm "
              >
                2
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary btn-sm "
              >
                3
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary btn-sm "
              >
                4
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary btn-sm "
              >
                5
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary btn-sm "
              >
                <i className="bi bi-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Filter;
