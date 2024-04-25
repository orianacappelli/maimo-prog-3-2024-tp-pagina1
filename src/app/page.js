import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./components/Navbar/Navbar";
import Card from "./components/Card/Card";
import Footer from "./components/Footer/Footer";

{
  /*
    <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
    </div>
  */
}

export default function Home() {
  const cardsGrid = [
    {
      title: 'Ingreso',
      description:'+Vivi la experiencia de estudiar en UMAI',
      image:'/lg_umai.png'
    },
    {
      title: 'Grado',
      description:'+La carrera que estas buscando',
      image:'/lg_umai.png'
    },
    {
      title: 'Posgrado',
      description:'+Especializate en UMAI',
      image:'/lg_umai.png'
    },
    {
      title: 'Extensión',
      description:'+Cursos y Actividades',
      image:'/lg_umai.png'
    }
  ]

  const redesSociales = [
    {
      title:'Facebook',
      link:'/Facebook/'
    },
    {
      title:'Instagram',
      link:'/Instagram/'
    },
    {
      title:'TikTok',
      link:'/TikTok/'
    }
  ]

  return (
    <main className={styles.main}>
      <Navbar title={'Universidad Maimónides'}/>
      <div>
        {
          cardsGrid.map((card, index)=> (
          <Card 
          key={index}
          title={card.title}
          image={card.image}
          description={card.description}
          />
        ))}
      </div>
      <Footer redes={redesSociales}/>
    </main>
  );
}
