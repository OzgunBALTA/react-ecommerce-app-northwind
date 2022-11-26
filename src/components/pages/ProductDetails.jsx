import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductServices from "../../services/productService";
import ImageGallery from "react-image-gallery";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  useEffect(() => {
    let productService = new ProductServices();
    productService
      .getProductDetailsById(id)
      .then((response) => setProduct(response.data.data));
  }, [id]);

  const image = product.map((url) => ({ original: url.productImagePath }));

  console.log(image);
  console.log(product);

  return (
    <div>
      <ImageGallery items={image} />
      <div>{product.map((item) => item.productName)}</div>
    </div>
  );
}
