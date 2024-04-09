import React from "react";

function Header() {
  return (
    <header class="header-filter p-2">
      <div class="container d-flex justify-content-between  align-items-center">
        <div class="logo">
          <img
            src="https://play-lh.googleusercontent.com/Fro4e_osoDhhrjgiZ_Y2C5FNXBMWvrb4rGpmkM1PDAcUPXeiAlPCq7NeaT4Q6NRUxRqo"
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
