import React from "react";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <h1>WEL COME TO OUR PAGE</h1>
      <h3>For Products Click The Button Products</h3>
      <NavLink to="/products">
        <button type="submit" class="btn btn-dark mt-3">
          View Products
        </button>
      </NavLink>
    </div>
  );
}

export default Home;
