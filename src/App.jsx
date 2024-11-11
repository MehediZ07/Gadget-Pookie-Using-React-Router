import { useEffect, useState } from "react";

import { useLoaderData, useParams } from "react-router-dom";
function App() {
  const [count, setCount] = useState(0);
  const categories = useLoaderData();
  const { Id } = useParams();

  const data = useLoaderData();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const filteredProduct = [...data].find((e) => e.product_id === Id);
    console.log(filteredProduct);
    setProduct(filteredProduct);
  }, [data, Id]);
  return;
  <div className="min-h-64">
    <img src="" alt="" />
    <p>vlk;hf;x'c</p>
    <p>dfghkl</p>
    <p>gfrdshjkl</p>
  </div>;
}

export default App;
