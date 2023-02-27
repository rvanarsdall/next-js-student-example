import { createUserNavigationItems } from "@/helpers/createUserNavigationItems";
import Link from "next/link";
import NavbarDropDown from "./NavbarDropDown";

const Navbar = (props) => {
  const userNavigationItems = createUserNavigationItems(props.userList);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Next JS
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" href="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
            <NavbarDropDown
              mainTitle="Examples"
              navItems={[{ name: "Test", link: "./test" }]}
            />

            <NavbarDropDown mainTitle="Users" navItems={userNavigationItems} />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
