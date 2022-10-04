import React from "react";

function CategoryFilter({ categories, buttonFilter, setButtonFilter}) {

  return (
    <div className="categories">
      <h5>Category filters</h5>
        {categories.map((category) => {
          return (
            <button id={category} className={buttonFilter===category ? "selected" : ""} key={category} onClick={() => setButtonFilter(category)}>{category}</button>
          )
        })}
    </div>
  );
}

export default CategoryFilter;
