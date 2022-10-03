import React from 'react';
import * as styles from './SecondSection.module.css';
import cieloIcon from '../../assets/images/CIELO.png';
import IconArrow from '../IconArrow/IconArrow';

const SecondSection = (props) => {

    return (
        <div className={styles.secondSectionWrap}>
            <div className={styles.imageSection}>
                <div className={styles.textSection}>
                    <p>Nunc, purus morbi tortor varius consectetur ornare. Porttitor cursus congue sodales blandit vitae justo turpis. Venenatis id dictum posuere laoreet.</p>
                    <h4>La nostra filosofia <span><IconArrow /></span></h4>
                </div>
                <div className={styles.brandImage}>
                    <img src={cieloIcon} />
                </div>
            </div>
        </div>
    )
}

export default SecondSection