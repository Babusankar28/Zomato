import React from "react";

function Header() {
  let path = window.location.pathname
console.log(path);
  return (
    <header className="header-filter p-2">
      <div className="container d-flex justify-content-between  align-items-center">
        <div className="logo">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAHXPluq6GtTRPDIHRv5kJPy86uFjp5sO7hg&usqp=CAU"
            alt="logo"
          />
        </div>
        <div className="buttons">
          <a href="#/" className="me-3">Login</a>
          <button type="button" className="btn btn-outline-light">Create an account</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
