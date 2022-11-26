import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

export default function SingedIn({ history }) {
  const { user, logout } = useAuth();
  let navigate = useNavigate();
  let handleLogout = () => {
    logout(() => {
      navigate("/");
    });
  };
  return (
    <div>
      <div
        className="btn-toolbar"
        role="toolbar"
        aria-label="Toolbar with button groups"
      >
        {user?.claim === "admin" && (
          <div className="btn-group me-2" role="group" aria-label="First group">
            <Link to="/admin">
              <button type="button" className="btn btn-primary">
                Admin
              </button>
            </Link>
          </div>
        )}

        <div className="btn-group" role="group" aria-label="Third group">
          <div className="btn-group">
            <button
              type="button"
              className="btn btn-danger dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {user.firstName ? user.firstName : "Profile"}
            </button>
            <ul className="dropdown-menu">
              <li>
                <Link to="/profile" className="dropdown-item">
                  Profile
                </Link>
              </li>
              <li>
                <Link to="/cartdetails" className="dropdown-item">
                  Sepet Detayı
                </Link>
              </li>
              <hr />
              <li>
                <Link to="/" className="dropdown-item" onClick={handleLogout}>
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
