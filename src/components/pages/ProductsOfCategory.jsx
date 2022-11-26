import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../Card";
import ProductService from "../../services/productService";

export default function ProductsOfCategory() {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState([]);

  useEffect(() => {
    let productService = new ProductService();
    productService.getProductsByCategoryId(id).then((response) => {
      setProducts(response.data.data);
    });
    setIsLoading(false);
  }, [id]);

  return (
    <div>
      <div className="container text-center">
        <div className="row row-cols-3">
          {products.map((product) => (
            <div className="col" key={product.productId}>
              <Card product={product} />
            </div>
          ))}
        </div>
      </div>
      {isLoading && (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
    </div>
  );
}
