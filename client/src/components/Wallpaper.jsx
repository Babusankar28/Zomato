import React from "react";

function Wallpaper() {
  return (
    <header className="container-fluid header">
      <div className="container">
        <div className="row">
          <div className="navbar navbar-expand navbar-dark bg-transparent">
            <div className="navbar-nav ms-auto">
              <div className="nav-item">
                <a href="/" className="nav-link text-light">
                  Login
                </a>
              </div>
              <div className="nav-item">
                <button className="btn btn-outline-light " type="button">
                  Create an account
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="offset-md-1 col-md-10 col-lg-8 offset-lg-2 py-5">
          <div className="d-flex align-items-center justify-content-center flex-column">
            <div className="my-3">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAHXPluq6GtTRPDIHRv5kJPy86uFjp5sO7hg&usqp=CAU"
                alt=""
                height="80px"
                width="80px"
                className="rounded-circle"
              />
            </div>
            <div className="text-light my-3 text-center">
              <h1 className="h2">Find the best restaurents, cafe, and bars</h1>
            </div>
            <div className="container">
              <div className="row g-3">
                <div className="col-md-5 col-sm-12">
                  <input
                    type="text"
                    list="restaurent"
                    placeholder="Please type your location"
                    className="form-control"
                  />
                  <datalist id="restaurent">
                    <option>Chennai</option>
                    <option>Bengaluru</option>
                    <option>Mumbai</option>
                    <option>Hyderabad</option>
                  </datalist>
                </div>
                <div className="col-md-7 col-sm-12">
                  <div className="input-group">
                    <span className="input-group-text">
                      <i className="bi bi-search"></i>
                    </span>
                    <input
                      type="text"
                      placeholder="Search for restaurent"
                      className="form-control"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Wallpaper;
