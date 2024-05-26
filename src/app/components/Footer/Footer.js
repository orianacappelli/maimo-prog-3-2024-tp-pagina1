import styles from "./Footer.module.css";

const Footer = (props) => {
  const { redes } = props;
  return (
    <footer className={styles.container}>
      <h1>MARVEL</h1>
      <nav>
        <ul className={styles.redes}>
          {redes.map((redesSociales, index) => (
            <li key={index}>
              <a href={redesSociales.link}>{redesSociales.title}</a>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
