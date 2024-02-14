import Hblog from "../adminHome/Hblog"
import HAbout from "../adminHome/HAbout"
import Hero from "../adminHome/hero/Hero"
import Hprice from "./Hprice"
import AboutCard from "../about/AboutCard"
import Testimonal from "../adminHome/testimonal/Testimonal"
// import HeaderAdmin from "../admin/header/Header"
// import FooterAdmin from "../admin/footer/Footer"


const Home = () => {
  return (
    <>
      {/* <HeaderAdmin/> */}
      <Hero />
      <AboutCard />
      <HAbout />
      <Testimonal />
      <Hblog />
      <Hprice />
      {/* <FooterAdmin/> */}
    </>
  )
}

export default Home
