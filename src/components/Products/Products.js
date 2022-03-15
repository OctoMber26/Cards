import React, {Fragment} from "react";
import "./Products.css";
import access from "../images/Access@2x.png";
import cross from "../images/Cross@2x.png";
import digital from "../images/Digital@2x.png";
import fast from "../images/Fast@2x.png";

const Products=()=>{
    return(
        <Fragment>
            <div className="container-fluid footer">
            <div class="card">
  <img src={access} class="card-img-top img-fluid card-img" alt="..." />
  <div class="card-body">
    <p class="card-text">Access anywhere</p>
  </div>
</div>
<div class="card">
  <img src={cross} class="card-img-top img-fluid card-img" alt="..." />
  <div class="card-body">
    <p class="card-text">Access anywhere</p>
  </div>
</div>
<div class="card">
  <img src={digital} class="card-img-top img-fluid card-img" alt="..." />
  <div class="card-body">
    <p class="card-text digital">Access anywhere</p>
  </div>
</div>
<div class="card">
  <img src={fast} class="card-img-top img-fluid card-img" alt="..." />
  <div class="card-body">
    <p class="card-text">Access anywhere</p>
  </div>
</div>
</div>
        </Fragment>
    )
}

export default Products;