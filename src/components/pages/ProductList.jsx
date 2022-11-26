import { useEffect, useState } from "react";
import ProductService from "../../services/productService";
import Card from "../Card";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState([]);
  const [numberOfElement, setNumberOfElement] = useState(3);
  const slice = products.slice(0, numberOfElement);
  const loadMore = () => {
    setNumberOfElement(numberOfElement + numberOfElement);
  };

  useEffect(() => {
    let productService = new ProductService();
    productService.getProducts().then((response) => {
      setProducts(response.data.data);
    });
    setIsLoading(false);
  }, []);

  return (
    <div>
      <div className="container text-center">
        <div className="row row-cols-3">
          {slice.map((product) => (
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
      <br />
      {!isLoading && (
        <div className="d-grid gap-2">
          <button className="btn btn-dark" type="button" onClick={loadMore}>
            Load More
          </button>
        </div>
      )}
    </div>
  );
}
