import React from "react";
import QuickSearch from "./QuickSearch";

function QuickSearches() {
  return (
    <div className="container my-3">
      <div className="row">
        <h1> Quick Searches</h1>
        <p className="text-muted">Discover restaurent by type of meal</p>
      </div>
      <div class="row g-4">
        <QuickSearch/>
        <QuickSearch/>
        <QuickSearch/>
        <QuickSearch/>
        <QuickSearch/>
        <QuickSearch/>
      </div>
    </div>
  );
}

export default QuickSearches;
