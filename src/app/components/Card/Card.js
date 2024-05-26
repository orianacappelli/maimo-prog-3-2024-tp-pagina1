'use client'

import {useState} from 'react'
import Image from "next/image";
import styles from "./Card.module.css";

const Card = ({ image, title, description }) => {
  const [message, setMessage] = useState(`Marvel`);

  const handleButtonClick = () => {
    console.log("Clickeando");
    setMessage(`Lego Marvel`);
  };

  return (
    <div
      className={styles.container}
      styles={{ backgroundImage: `url(${image})`}}
    >
      <Image
        src={image}
        alt='marvel personaje'
        width={200}
        height={160}
        priority
      />
      <div className={styles.data}>
        <h3>{title}</h3>
        <p>{description}</p>
        <p>{message}</p>
        <button onClick={handleButtonClick} className={styles.secondary_button}>Learn more</button>
      </div>
    </div>
  );
};

export default Card;
