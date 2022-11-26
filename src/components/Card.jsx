import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useCart } from "../contexts/CartContext";

export default function Card({ product }) {
  const { addToCart } = useCart();
  const { isLoggedIn } = useAuth();
  const handleAddToCart = (product) => {
    addToCart(product);
  };
  return (
    <div>
      <div className="card">
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{product.productName}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{product.unitPrice} TL</li>
          <li className="list-group-item">{product.unitsInStock} Adet Kaldı</li>
        </ul>
        <div className="card-body">
          <div
            className="btn-toolbar justify-content-md-center"
            role="toolbar"
            aria-label="Toolbar with button groups"
          >
            <div
              className="btn-group me-2"
              role="group"
              aria-label="First group"
            >
              <Link to={`/product/${product.productId}`}>
                <button type="button" className="btn btn-primary">
                  Ürün Detayı
                </button>
              </Link>
            </div>
            <div
              className="btn-group me-2"
              role="group"
              aria-label="Second group"
            >
              {isLoggedIn && (
                <button
                  type="button"
                  className="btn btn-info"
                  onClick={() => handleAddToCart(product)}
                >
                  Sepete Ekle
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
