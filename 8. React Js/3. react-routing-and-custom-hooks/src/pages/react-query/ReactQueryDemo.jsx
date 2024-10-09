import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import { addNewProduct, fetchListOfProducts } from "./api";

const ReactQueryDemo = () => {
  const [productTitle, setProductTitle] = useState("");

  const getQueryClient = useQueryClient();

  const { data: productList, isLoading } = useQuery({
    queryKey: ["productList"],
    queryFn: () => fetchListOfProducts(),
  });

  const { mutateAsync: handleAddNewProductMutation } = useMutation({
    mutationFn: addNewProduct,
    onSuccess: () => {
      getQueryClient.invalidateQueries(["productList"]);
    },
  });

  const handleAddNewProduct = async () => {
    await handleAddNewProductMutation(productTitle);
    setProductTitle("");
  };

  if (isLoading) return <h3>Loading products! Please wait</h3>;

  return (
    <div>
      <h1>React Query Demo</h1>
      <div>
        <input
          name="name"
          value={productTitle}
          placeholder="Enter product title"
          onChange={(event) => setProductTitle(event.target.value)}
        />
        <button
          onClick={handleAddNewProduct}
          disabled={productTitle.trim() === ""}
          type="button"
        >
          Add New Product
        </button>
      </div>
      <ul>
        {productList?.length > 0 ? (
          productList.map((product) => (
            <li key={product.id} style={{ listStyle: "none" }}>
              {product.title}
            </li>
          ))
        ) : (
          <h3>No product found</h3>
        )}
      </ul>
    </div>
  );
};

export default ReactQueryDemo;
