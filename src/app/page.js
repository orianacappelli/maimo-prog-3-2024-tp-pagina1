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
      image:'/images/ironmann.png'
    },
    {
      title: 'Captain America',
      description:'',
      image:'/images/captainamerican.png'
    },
    {
      title: 'Spiderman',
      description:'',
      image:'/images/spidermann.png'
    },
    {
      title: 'Hulk',
      description:'',
      image:'/images/hulkk.png'
    },
    {
      title: 'Black Widow',
      description:'',
      image:'/images/blackwidow.png'
    },
    {
      title: 'Star Lord',
      description:'',
      image:'/images/starlord.png'
    },
    {
      title: 'Black Panter',
      description:'',
      image:'/images/blackpanter.png'
    },
    {
      title: 'Ant Man',
      description:'',
      image:'/images/antman.png'
    },
    {
      title: 'Thor',
      description:'',
      image:'/images/thorr.png'
    }
  ];

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
      title:'TikTok',
      link:'/TikTok/'
    },
    {
      title:'Instagram',
      link:'/Instagram/'
    }
  ]

  return (
    <main className={styles.main}>

      <Navbar title={'Marvel'} menu={menuItems}/>
      <Hero mainText={`LEGO MARVEL`} textoParr={'From superheroes to super villains, anti-heroes to evil geniuses, loveable loners to comedic wisecrackers, LEGO® Marvel’s impressive lineup of iconic characters is as diverse as it is awesome.'}/>
      <CardsGrid cards={data}/>
      <Footer redes={redesSociales}/>
      <FetchGrid/>
    </main>
  );
}
