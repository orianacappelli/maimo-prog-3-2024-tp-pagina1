import styles from "./page.module.css";
import Navbar from "./components/Navbar/Navbar";
import Card from "./components/Card/Card";
import Hero from "@/app/components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import CardsGrid from "@/app/components/CardsGrid/CardsGrid";
import FetchGrid from "@/app/components/FetchGrid/FetchGrid"


export default function Home() {
  const data = [
    {
      title: 'Iron man',
      description:'',
      image:'/images/iron-man.jpeg'
    },
    {
      title: 'Captain America',
      description:'',
      image:'/images/captain-american.jpeg'
    },
    {
      title: 'Spiderman',
      description:'',
      image:'/images/spiderman.jpeg'
    },
    {
      title: 'Hulk',
      description:'',
      image:'/images/hulk.jpeg'
    },
    {
      title: 'Black Widow',
      description:'',
      image:'/images/black-widow.jpeg'
    },
    {
      title: 'Star Lord',
      description:'',
      image:'/images/star-lord.jpeg'
    },
    {
      title: 'Black Panter',
      description:'',
      image:'/images/black-panter.jpeg'
    },
    {
      title: 'Ant Man',
      description:'',
      image:'/images/ant-man.jpeg'
    },
    {
      title: 'Thor',
      description:'',
      image:'/images/thor.jpeg'
    }
  ]

  const menuItems = [
    {
      item: "Home",
      link: "/",
    },
    {
      item: "About",
      link: "/",
    },
    {
      item: "Contact",
      link: "/",
    },
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

      <Navbar title={'Marvel'} menu={menuItems}/>
      <Hero mainText={`Marvel`}/>
      <CardsGrid cards={data}/>
      <Footer redes={redesSociales}/>
      <FetchGrid/>
    </main>
  );
}
