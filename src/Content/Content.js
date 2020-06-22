import React from "react";
import styles from './Content.module.scss'
import Paper from "@material-ui/core/Paper";
import {connect} from "react-redux";


export function Content(props) {

    const populationStr = props.country.population.toString();
    const populationArr = [...populationStr];
    const population = populationArr.map ( (item,index) => {
        if(index === populationArr.length - 4 || index === populationArr.length - 7) return `${item} `
        return item
    }).join('')



    return (
        <Paper className={styles.content} elevation={3}>
            <div className={styles.flag}><img src={props.country.flag} alt=""/></div>
            <div className={styles.country_name}>{props.country.name}</div>
            <div className={styles.item}>
                Коды страны: {props.country.alpha2Code}, {props.country.alpha3Code}
            </div>
            <div className={styles.item}>
                Столица: {props.country.capital}
            </div>
            <div className={styles.item}>
                Регион: {props.country.region}
            </div>
            <div className={styles.item}>
                Население: {population} человек
            </div>
            <div className={styles.item}>
                Часовые пояса: {props.country.timezones.map(i => (
                <span className={styles.timezone}>{i};</span>))}
            </div>
            <div className={styles.item}>
                Национальное название страны: {props.country.nativeName}
            </div>
            <div className={styles.item}>Валюта:
                <ul className={styles.currency_list}>
                    <li>Название: {props.country.currencies[0].name}</li>
                    <li>Код: {props.country.currencies[0].code}</li>
                    <li>Символ: {props.country.currencies[0].symbol}</li>
                </ul>
            </div>
            <div className={styles.item}>
                Язык: {props.country.name}/{props.country.languages[0].nativeName}
            </div>
        </Paper>
    )
}


const mapStateToProps = (state) => ({
    country: state.countries.currentCountry,
})

export const ContentContainer = connect(mapStateToProps)(Content)