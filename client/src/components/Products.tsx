import * as React from "react";

export interface ProductsProps {}

export interface ProductsState {}

class Products extends React.Component<ProductsProps, ProductsState> {
  render() {
    return <h2>Products Component</h2>;
  }
}

export default Products;
