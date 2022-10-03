import * as React from "react"
import Header from "../Components/Header/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import * as styles from './styles.module.css';
import SectionRoundAnimation from "../Components/SectionRoundAnimation/SectionRoundAnimation";
import SecondSection from "../Components/SecondSection/SecondSection";
import SliderWine from "../Components/SliderWine/SliderWine";
import coverImage from '../assets/images/20210924_892A6043.png';
import './slickslider.css';

const IndexPage = () => {
  return (
    <main>
      <div className={styles.mainSection}>
        <Header />
        <SectionRoundAnimation />
        <SecondSection />
        <SliderWine />
        <div style={{marginTop: 100}}>
          <img src={coverImage} style={{width:'100%', height:'461px', objectFit:'cover'}} />
        </div>
      </div>
    </main>
  )
}

export default IndexPage