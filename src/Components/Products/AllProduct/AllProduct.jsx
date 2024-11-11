import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";
export default function AllProduct() {
  const { Category } = useParams();

  const data = useLoaderData();
  const [product, setProduct] = useState([...data]);

  useEffect(() => {
    if (!Category) {
      setProduct(data.slice(0, 6));
      return;
    }
    if (Category === "all") {
      setProduct(data);
      return;
    }
    const filteredCategory = [...data].filter((e) => e.category === Category);

    setProduct(filteredCategory);
  }, [data, Category]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0">
      {product.map((p) => (
        <ProductCard key={p.product_id} product={p}></ProductCard>
      ))}
    </div>
  );
}
