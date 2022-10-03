import React, { useState } from 'react';
import * as styles from './WineCard.module.css';
import IconArrow from '../IconArrow/IconArrow';


const WineCard = (props) => {
    const {wineHeading, wineImage} = props;
    return (
        <div className={styles.wineCard}>
           <div className={styles.wineHeading}>{wineHeading} <IconArrow /></div>
           <img src={wineImage} />
        </div>
    )
}

export default WineCard