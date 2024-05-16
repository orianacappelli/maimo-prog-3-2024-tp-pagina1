import Image from "next/image";
import styles from './Hero.module.css'

const Hero = ({mainText}) => {
  return ( 
    <div className={styles["container"]}>
      <div className={styles["hero_bkg"]}>
        <h2>{mainText}</h2>
      </div>
    </div>
  );
};

export default Hero;
