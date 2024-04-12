import React from "react";

function Header() {
  return (
    <header class="header-filter p-2">
      <div class="container d-flex justify-content-between  align-items-center">
        <div class="logo">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAHXPluq6GtTRPDIHRv5kJPy86uFjp5sO7hg&usqp=CAU"
            alt="logo"
          />
        </div>
        <div class="buttons">
          <a href="#/" className="me-3">Login</a>
          <button type="button" className="btn btn-outline-light">Create an account</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
