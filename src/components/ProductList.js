import React from "react";
import { useFilterContext } from "../context/filter_context";
import { useProductsContext } from "../context/products_context";
import GridView from "./GridView";
import ListView from "./ListView";
import Loading from "./Loading";
import Error from "./Error";

const ProductList = () => {
  const { products_loading: loading, products_error: error } =
    useProductsContext();
  const { filtered_products: products, grid_view } = useFilterContext();

  if (loading) return <Loading />;
  if (error) return <Error />;
  if (products.length < 1) {
    return (
      <h5 style={{ textTransform: "none" }}>
        Sorry, no products matched your search...
      </h5>
    );
  }
  if (!grid_view) {
    return <ListView products={products} />;
  }
  return <GridView products={products} />;
};

export default ProductList;
