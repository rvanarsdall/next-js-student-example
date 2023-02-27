import Link from "next/link";

const NavbarDropDown = (props) => {
  const { mainTitle, navItems } = props;
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
        {mainTitle}
      </a>
      <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
        <li>
          {navItems.map((item, idx) => (
            <Link href={item.link} key={idx} className="dropdown-item">
              {item.name}
            </Link>
          ))}
        </li>
      </ul>
    </li>
  );
};

export default NavbarDropDown;
