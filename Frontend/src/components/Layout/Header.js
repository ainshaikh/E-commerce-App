import React from "react";
import { NavLink, Link } from "react-router-dom";
import { CiShoppingBasket } from "react-icons/ci";
import { useAuth } from "../../context/Auth";
import { toast } from "react-hot-toast";
const Header = () => {
  const [auth, setAuth] = useAuth();
  const handleLogout =()=>{
    setAuth({
      ...auth,
      user: null,
      token: '',
    })
    localStorage.removeItem('auth');
    toast.success("Logout successfully")
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link className="navbar-brand">
              <CiShoppingBasket /> E-Commerce App
            </Link>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/" className="nav-link " aria-current="page">
                  Home
                </NavLink>
              </li>
              {!auth.user ? (
                <>
                  {" "}
                  <li className="nav-item">
                    <NavLink
                      to="/register"
                      className="nav-link "
                      aria-current="page"
                    >
                      Register
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="/login"
                      className="nav-link "
                      aria-current="page"
                    >
                      Login
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  {" "}
                  <li className="nav-item">
                    <NavLink onClick={handleLogout}
                      to="/login"
                      className="nav-link "
                      aria-current="page"
                    >
                      Logout
                    </NavLink>
                  </li>
                </>
              )}

              <li className="nav-item">
                <NavLink
                  to="/category"
                  className="nav-link "
                  aria-current="page"
                >
                  Category
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/cart" className="nav-link " aria-current="page">
                  Cart(0)
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
