import React, { useState } from 'react';
import * as styles from './SectionRoundAnimation.module.css';
import roundImage from '../../assets/images/roundanimation.png';

const SectionRoundAnimation = (props) => {
    window.onscroll = function () {
        var theta = document.documentElement.scrollTop / 50 % Math.PI;

        document.getElementById('js-logo').style.transform = 'rotate(' + theta + 'rad)';
    }
    return (
        <div className={styles.scrollBox}>
            <div className={styles.roundBrandBox}>
                <img src={roundImage} id="js-logo" />
            </div>
        </div>
    )
}

export default SectionRoundAnimation