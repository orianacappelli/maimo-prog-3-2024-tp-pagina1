import Image from "next/image";
import styles from './Hero.module.css'

const Hero = ({mainText, textoParr}) => {
  return ( 
    <div className={styles["container"]}>
      <div className={styles["hero_bkg"]}>
          <h2>{mainText}</h2>
          <p>{textoParr}</p>
          <button>LEARN MORE</button>
      </div>
    </div>
  );
};

export default Hero;
