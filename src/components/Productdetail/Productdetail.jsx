import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { NavLink } from "react-router-dom";

export const Productdetail = () => {
  const { id } = useParams();

  const [product, setProduct] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const res = await fetch(`https://fakestoreapi.com/products/${id}`);

      setProduct(await res.json());
    };
    getProducts();
  }, []);

  return (
    <>
      <div>
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={product.image}
                className="img-fluid rounded-start image"
                alt={product.title}
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h1 className="card-title mt-5">{product.title}</h1>
                <p className="card-text mt-5">{product.description}</p>
                <p className="card-text">
                  <small className="text-muted">{product.category}</small>
                </p>

                <h2 className="card-text">$ {product.price}</h2>
                
                <NavLink to="/orderdetails">
                  <button type="submit" className="buybtn btn btn-dark mt-5">
                    BUY
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
