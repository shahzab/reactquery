import Header from "../components/Header";
import Product from "../components/Product";
import { Button, ButtonGroup, Classes } from "@blueprintjs/core";
import { useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";
const Products = () => {
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("asc");

  /* Load the Categories */

  const loadCategories = async () => {
    return axios
      .get("https://fakestoreapi.com/products/categories")
      .then((res) => res.data)
      .catch((err) => err);
  };
  const loadProducts = async () => {
    const url = "https://fakestoreapi.com/products/" + (category ? `category/${category}` : "");
    url += `?sort=${sort}`;
    return axios
      .get(url)
      .then((res) => res.data)
      .catch((err) => err);
  };

  const categories = useQuery("categories", loadCategories);
  const products = useQuery(["products", category, sort], loadProducts);

  return (
    <>
      <Header></Header>
      <div className="container">
        <div className="prods-top-bar">
          <div className="categories">
            <Button
              large
              onClick={() => setCategory("")}
              intent={category == "" ? "success" : "none"}
            >
              Show All Porducts
            </Button>
            {categories.isLoading
              ? "Loading..."
              : categories.data
              ? categories.data.map((x, i) => {
                  return (
                    <Button
                      large
                      disabled={products.isLoading}
                      intent={category == x ? "success" : "none"}
                      onClick={() => setCategory(x)}
                      text={x}
                      key={`cat${i}`}
                    />
                  );
                })
              : null}
          </div>
          <div className="sort-section">
            <ButtonGroup>
              <Button
                icon="sort-asc"
                large
                onClick={() => setSort("asc")}
                intent={sort == "asc" ? "success" : "none"}
              />
              <Button
                icon="sort-desc"
                large
                onClick={() => setSort("desc")}
                intent={sort == "desc" ? "success" : "none"}
              />
            </ButtonGroup>
          </div>
        </div>
        <h1 className="category-header">{category || "All Products"} </h1>
        {products.isLoading ? (
          <div>Loading products...</div>
        ) : products.data ? (
          <div className="grid grid-products">
            {products.data.map((prod, index) => {
              return <Product prod={prod} key={`prod${index}`} />;
            })}
          </div>
        ) : (
          "Sorry! Unable to find products"
        )}
      </div>
    </>
  );
};
export default Products;
