import React from "react";

function Card({ title }) {
  return (
    <div className="container food-card shadow-lg p-4 mb-3">
      <div className="food-content py-2 d-flex gap-4 align-items-center border-bottom border-dark">
        <div className="food-img">
          <img
            class="rounded shadow"
            src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D"
            height="80px"
            alt="logo"
          />
        </div>
        <div className="food-details">
          <h4 className="m-0">{title}</h4>
          <h6 className="text-muted m-0">Fort</h6>
          <p className="m-0">Shop 1,Plot D,Samrudhi compley,chincholi....</p>
        </div>
      </div>
      <div className="price-details mt-2">
        <div className="cuisines d-flex">
          <span className="w-25">CUISINES:</span>
          <span>Bakery</span>
        </div>
        <div className="cost d-flex">
          <span className="w-25">COST FOR TWO:</span>
          <span>
            <i className="bi bi-currency-rupee"></i>700
          </span>
        </div>
      </div>
    </div>
  );
}

export default Card;
