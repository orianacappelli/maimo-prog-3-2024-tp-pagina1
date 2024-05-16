import styles from "./Navbar.module.css";

const Navbar = (props) => {
  const { title, menu } = props;
  return (
    <header className={styles["container-navbar"]}>
      <h1>{title}</h1>
      <nav>
        <ul className={styles.menu}>
          {menu.map((menuItem, index) => (
            <li key={index}>
              <a href={menuItem.link}>{menuItem.item}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
