import React from "react";
import styles from './Search-form.module.scss'
import {SearchField} from "./SearchField";
import {connect} from "react-redux";
import {
    getCountryDescriptionByCode,
    getCountryDescriptionByName,
    setCurrentCountry
} from "../redux/countryName-reducer";


export function SearchForm(props) {


    return (
        <div >
            <form className={styles.form} noValidate autoComplete="off">
                <SearchField countries={props.countries} setCurrentCountry={props.setCurrentCountry} getCountry={props.getCountryDescriptionByName} fieldTitle={"Поиск по названию страны"} labelTitle={"Название страны"}/>
                <SearchField countries={props.countries} setCurrentCountry={props.setCurrentCountry} getCountry={props.getCountryDescriptionByCode} fieldTitle={"Поиск по коду страны"} labelTitle={"Код страны"}/>
            </form>
        </div>
    )
}

const mapStateToProps = (state) => ({
  countries: state.countries
})

export const ContainerSearchForm = connect (mapStateToProps,{setCurrentCountry, getCountryDescriptionByName, getCountryDescriptionByCode})(SearchForm);