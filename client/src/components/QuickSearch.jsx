import React from "react";

function QuickSearch() {
  return (
    <div className="col-lg-4 col-md-6 col-sm-12 p-1">
      <div className="food-item d-flex">
        <div className="food-img">
          <img
            src={
              "https://www.axisbank.com/images/default-source/progress-with-us_new/idli.jpg"
            }
            alt="food"
            height="100px"
            width="100px"
          />
        </div>
        <div className="food-content ms-2 py-1">
          <h2 className="m-0">Breakfast</h2>
          <p className="text-muted ">
            Start your day with exclusive breakfast options
          </p>
        </div>
      </div>
    </div>
  );
}

export default QuickSearch;
