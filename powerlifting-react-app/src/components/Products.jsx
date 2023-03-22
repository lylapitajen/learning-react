import React from "react";
import Title from "./Title";
import { featuredProducts } from "../data";

const Products = () => {
  return (
    <section className="section margin" id="products">
      <Title title="Featured Products" />

      <div className="section-center featured-center">
        {featuredProducts.map((product) => {
          const { id, productImg, productName, price } = product;
          return (
            <article key={id} className="product-card">
              <div className="product-img-container">
                <img src={productImg} className="product-img" alt="" />
              </div>
              <div className="product-info">
                <div className="product-name">
                  <h4>{productName}</h4>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <p className="product-price">{price}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Products;
