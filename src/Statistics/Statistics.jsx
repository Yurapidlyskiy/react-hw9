import React from 'react';
import styles from './Statistics.module.css';

export default function Statistics({title, stats}) {
    return (
        <div className={styles.statistics}>
            <h2 class="title">{title}</h2>
            <ul className={styles.box}>
                <li className={styles.firstSection} >
                    <span class="label">{stats[0].label}</span>
                    <span class="percentage">{stats[0].percentage}%</span>
                </li>
                <li className={styles.secondSection}>
                    <span class="label">{stats[1].label}</span>
                    <span class="percentage">{stats[1].percentage}%</span>
                </li>
                <li className={styles.thirdSection}>
                    <span class="label">{stats[2].label}</span>
                    <span class="percentage">{stats[2].percentage}%</span>
                </li>
                <li className={styles.fourthSection}>
                    <span class="label">{stats[3].label}</span>
                    <span class="percentage">{stats[3].percentage}%</span>
                </li>
            </ul>
        </div>
    )
}