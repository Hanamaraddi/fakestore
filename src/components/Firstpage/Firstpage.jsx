import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export const Firstpage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products");

      setData(await res.json());
    };
    getProducts();
  }, []);

  return (
    <div>
      {data.map((product) => (
        <div key={product.id}>
          <div className="card mb-3 mt-5">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={product.image}
                  className="img-fluid rounded-start"
                  alt={product.title}
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <h6 className="card-text">$ {product.price}</h6>
                  <p className="card-text"> {product.category}</p>
                  <p className="card-text">
                    <small className="text-muted">{product.rating.rate}</small>
                  </p>
                  <NavLink
                    to={`/products/${product.id}`}
                    className="btn btn-outline-dark"
                  >
                    View Product
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
