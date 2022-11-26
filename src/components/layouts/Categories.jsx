import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import CategoryService from "../../services/categoryService";

export default function Categories() {
  useEffect(() => {
    let categoryService = new CategoryService();
    categoryService.getCategories().then((response) => {
      setCategories(response.data.data);
      setIsLoading(false);
    });
  }, []);

  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div>
      <ul className="list-group">
        <li className="list-group-item">
          <Link to={"/"}>Tüm Ürünler</Link>
        </li>
        {categories.map((category) => (
          <li className="list-group-item" key={category.categoryId}>
            <Link to={`/category/${category.categoryId}`}>
              {category.categoryName}
            </Link>
          </li>
        ))}
      </ul>
      {isLoading && (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
    </div>
  );
}
