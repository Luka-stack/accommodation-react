import { NavLink } from "react-router-dom";

import useAuth from "../../hooks/useAuth";
import styles from "./Menu.module.css";

export default function Menu() {
  const [auth, setAuth] = useAuth();

  const login = (event: any) => {
    event.preventDefault();
    setAuth(true);
  };

  const logout = (event: any) => {
    event.preventDefault();
    setAuth(false);
  };

  return (
    <div className={`${styles.menuContainer} breadcrumb`}>
      <ul className={styles.menu}>
        <li className={styles.menuItem}>
          <NavLink
            exact
            to="/"
            className="mr-2"
            activeClassName={styles.menuItemActive}
            style={{ color: "#dc3545" }}
          >
            Home
          </NavLink>
        </li>
        <li className={styles.menuItem}>
          {auth ? (
            <>
              <NavLink
                to="/profile"
                className={`mr-2`}
                activeClassName={styles.menuItemActive}
                style={{ color: "#dc3545" }}
              >
                Profile
              </NavLink>
              <a
                href="#"
                className={`mr-2`}
                onClick={logout}
                style={{ color: "#dc3545" }}
              >
                Logout
              </a>
            </>
          ) : (
            <a
              href="#"
              className={`mr-2`}
              onClick={login}
              style={{ color: "#dc3545" }}
            >
              Login
            </a>
          )}
        </li>
      </ul>
    </div>
  );
}
