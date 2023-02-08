// Products.js
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchProducts } from "./actions";

const Products = ({ products, fetchProducts }) => {
  useEffect(() => {
    fetchProducts();
    // console.log(data);
  }, [fetchProducts]);
  console.log(products.products);
  return (
    <div className="container">
      {products.products.length > 0 ? (
        products.products.map((product, keyIndex) => (
          <>
            <div className="row">
              <div className="col-sm">
                {" "}
                <div className="card NewClass" key={keyIndex}>
                  <img
                    className="card-img-top img-thumbnail "
                    src={product.image}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.description}</p>
                    <a href="#" className="btn btn-primary">
                      {product.price}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </>
        ))
      ) : (
        <>Hello</>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  products: state.products,
});

const mapDispatchToProps = {
  fetchProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
