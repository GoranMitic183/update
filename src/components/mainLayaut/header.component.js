import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./header.module.css";

const Header = () => {
  const navigate = useNavigate();

  const [isAdmin, setIsAdmin] = useState(false);

  const storedToken = localStorage.getItem("token");

  useEffect(() => {
    if (storedToken) {
      const parsedToken = JSON.parse(storedToken);

      if (parsedToken.role === 1) {
        setIsAdmin(true);
      }
    }
  }, [storedToken, isAdmin]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className={`container ${classes.body}`}>
      <nav className={`navbar bg-dark ${classes.header}`} data-bs-theme="dark">
        <div className="container-fluid" style={{ justifyContent: "inherit" }}>
          <h3 className={classes.logo}>GORAN MITIC</h3>
          <div>
            {isAdmin && storedToken && (
              <button
                type="button"
                class="btn btn-primary position-relative"
                style={{ marginRight: "1.5rem" }}
              >
                Inbox
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  99+
                  <span class="visually-hidden">unread messages</span>
                </span>
              </button>
            )}
            {storedToken && (
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={handleLogout}
              >
                Logout
              </button>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
