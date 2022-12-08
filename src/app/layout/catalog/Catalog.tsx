import { useState, useEffect } from "react";
import agent from "../../api/agent";
import { Product } from "../../models/product";
import LoadingComponent from "../Loading/LoadingComponent";
import ProductList from "./ProductList";

const Catalog = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    agent.Catalog.list()
      .then((products) => setProducts(products))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <LoadingComponent message="Loading Products..." />;

  return (
    <>
      <ProductList products={products} />
    </>
  );
};

export default Catalog;
