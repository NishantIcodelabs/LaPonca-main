import React, { useState } from 'react';
import * as styles from './SliderWine.module.css';
import Slider from "react-slick";
import WineCard from '../WineCard/WineCard';
import wineImage from '../../assets/images/LAPONCA _SAUVIGNON.png';
import bottomImage from '../../assets/images/secondimage.png';


const SliderWine = (props) => {
    const settings = {
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        prevArrow: false,
        nextArrow: false
    };
    return (
        <div className={styles.sliderSection}>
            <div className={styles.bottomImageBox}>
                <img src={bottomImage} />
            </div>
            <h1>Vini</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, turpis etiam commodo metus, nisl vitae. Tincidunt vitae nisl lectus imperdiet.</p>
            <Slider {...settings} className={styles.wineCardSlider}>
                <div>
                    <WineCard 
                        wineHeading="Sauvignon"
                        wineImage={wineImage}
                    />
                </div>
                <div>
                    <WineCard 
                        wineHeading="Sauvignon"
                        wineImage={wineImage}
                    />
                </div>
                <div>
                    <WineCard 
                        wineHeading="Sauvignon"
                        wineImage={wineImage}
                    />
                </div>
                <div>
                    <WineCard 
                        wineHeading="Sauvignon"
                        wineImage={wineImage}
                    />
                </div>
                <div>
                    <WineCard 
                        wineHeading="Sauvignon"
                        wineImage={wineImage}
                    />
                </div>
            </Slider>
        </div>
    )
}

export default SliderWine