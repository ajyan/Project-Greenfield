import React from "react";
const ProductBreakdown = ({ characteristics }) => {
  return characteristics.map(characteristic => {
    console.log(characteristic[1].value*20);

    if (characteristic[0] === "Quality") {
      return (
 <div key={characteristic[1].id} className="container">
          {/* title */}
          <div className="row align-items-start">{characteristic[0]}</div>
          {/* progress bar */}
          <div className="row align-items-center">
            <div className="col">
            <div className="productslidercontainer">
            <input type="range" min="1" max="100" defaultValue={`${characteristic[1].value*20}`} className="ProductSlider"></input>
</div>
<div className="grade-prduct-parent">
      <div className="grade-product-outside">
            <div className="progress grade-product-bar" style={{ "width": "100%" }}>
            <div className="progress-bar productprogress-bar" style={{ "width": `100%`, "backgroundColor": "grey" }} role="progressbar" aria-valuemin="0" aria-valuemax="100" ></div>
            </div>
      </div>
    </div>
            </div>
          </div>

          <div className="row align-items-end">
            <div className="col">
              <p>Poor</p>
            </div>
            <div className="col CenterText">
              <p></p>
            </div>
            <div className="col RightText">
              <p>Great</p>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div key={characteristic[1].id} className="container">
          {/* title */}
          <div className="row align-items-start">{characteristic[0]}</div>
          {/* progress bar */}
          <div className="row align-items-center">
            <div className="col">
            <div className="productslidercontainer">
            <input type="range" min="1" max="100" defaultValue={`${characteristic[1].value*20}`} className="ProductSlider"></input>
</div>
<div className="grade-prduct-parent">
      <div className="grade-product-outside">
            <div className="progress grade-product-bar" style={{ "width": "100%" }}>
            <div className="progress-bar productprogress-bar" style={{ "width": `100%`, "backgroundColor": "grey" }} role="progressbar" aria-valuemin="0" aria-valuemax="100" ></div>
            </div>
        <div className=" grade-product-img"></div>
      </div>
    </div>
            </div>
          </div>

          <div className="row align-items-end">
            <div className="col">
              <p>Too small</p>
            </div>
            <div className="col CenterText">
              <p>Perfect</p>
            </div>
            <div className="col RightText">
              <p>Too large</p>
            </div>
          </div>
        </div>
      );
    }
  });
};

export default ProductBreakdown;

// "width": `${characteristic[1].value*20}%`