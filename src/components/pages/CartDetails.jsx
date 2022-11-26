import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../contexts/CartContext";

export default function CartDetails() {
  const { items, removeFromCart } = useCart();
  const totalPrice = items.reduce((acc, obj) => acc + obj.unitPrice, 0);
  const handleRemoveFromCart = (product) => {
    removeFromCart(product);
  };
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Ürün Adı</th>
            <th scope="col">Adet</th>
            <th scope="col">Tutar</th>
            <th scope="col">Durum</th>
          </tr>
        </thead>
        <tbody>
          {items.map((product, i) => (
            <tr key={i}>
              <td>{product.productName}</td>
              <td>Adet</td>
              <td>{product.unitPrice} TL</td>
              <td>
                <button
                  type="button"
                  className="btn btn-info"
                  onClick={() => handleRemoveFromCart(product)}
                >
                  Çıkar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>Toplam Fiyat = {totalPrice} TL</div>
      <Link to="/">
        <button type="button" className="btn btn-info">
          Home
        </button>
      </Link>
    </div>
  );
}
