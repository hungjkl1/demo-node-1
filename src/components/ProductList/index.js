import React from "react";
import products from "./product.json";
import ProductCell from "./ProductCell/index.js";
const ProductList = props => {
  return (
    <div className='container'>
    <div className='row'>
    {products.map(item => {
      return <ProductCell item={item} key={item.id}/>
    })}
    </div>
    </div>
  );
};

export default ProductList;
