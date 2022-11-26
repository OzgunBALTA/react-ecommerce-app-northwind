import { Route, Routes } from "react-router-dom";
import Home from "../components/layouts/Home";
import AddProduct from "../components/pages/admin/AddProduct";
import Admin from "../components/pages/admin/Admin";
import EditProduct from "../components/pages/admin/EditProduct";
import Orders from "../components/pages/admin/Orders";
import Products from "../components/pages/admin/Products";
import Login from "../components/pages/Auth/Login/Login";
import Register from "../components/pages/Auth/Register/Register";
import CartDetails from "../components/pages/CartDetails";
import Error404 from "../components/pages/Error404";
import ProductDetails from "../components/pages/ProductDetails";
import ProductList from "../components/pages/ProductList";
import ProductsOfCategory from "../components/pages/ProductsOfCategory";
import Profile from "../components/pages/Profile";
import ProtectedRoute from "../components/protectedRoute";
import { useAuth } from "../contexts/AuthContext";

export default function Router() {
  const { isLoggedIn, user } = useAuth();
  return (
    <div>
      <Routes>
        <Route path="/*" element={<Error404 />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        <Route path="/" element={<Home />}>
          <Route path="/" element={<ProductList />} />
          <Route path="/category/:id" element={<ProductsOfCategory />} />
        </Route>

        <Route element={<ProtectedRoute isAllowed={!!isLoggedIn} />}>
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/cartdetails" element={<CartDetails />} />
        </Route>

        <Route
          path="admin"
          element={
            <ProtectedRoute
              redirectPath="/"
              isAllowed={user?.claim.includes("admin")}
            >
              <Admin />
            </ProtectedRoute>
          }
        >
          <Route path="/admin/products" element={<Products />} />
          <Route path="/admin/products/:id" element={<EditProduct />} />
          <Route path="/admin/products/new" element={<AddProduct />} />
          <Route path="/admin/orders" element={<Orders />} />
        </Route>
      </Routes>
    </div>
  );
}
