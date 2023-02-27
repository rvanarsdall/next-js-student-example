import Link from "next/link";

const NavbarDropDown = (props) => {
  return (
    <li className="nav-item dropdown">
      <a
        className="nav-link dropdown-toggle"
        href="#"
        id="navbarDropdown"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        [LIST ITEM TITLE HERE]
      </a>
      <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
        <li>
          <a href="" className="dropdown-item">
            NAV ITEM 1 HERE
          </a>
        </li>
        <li>
          <a href="" className="dropdown-item">
            NAV ITEM 2 HERE
          </a>
        </li>
      </ul>
    </li>
  );
};

export default NavbarDropDown;
