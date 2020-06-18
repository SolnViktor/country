import React from "react";
import styles from './Header.module.scss'
import logo from '../accets/logo/logo.png'


export function Header() {


    return (
        <div className={styles.header}>
            <div className={styles.title}> Информация о странах
                <img className={styles.logo} src={logo} alt=""/>
            </div>
            <div className={styles.button_toggle}>
                <button>RU</button>
                <button>EN</button>
            </div>
        </div>
    )
}