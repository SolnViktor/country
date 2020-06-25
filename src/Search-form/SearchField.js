import styles from "./Search-form.module.scss";
import React, {useState} from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {CSSTransition} from "react-transition-group";


export const SearchField = (props) => {
    const [input, setInput] = useState('')

    const checkCountriesArray = (countryName) => {
        return props.countries.countriesArray.find(i => (
            i.name.toLowerCase() === countryName
            || i.alpha2Code.toLowerCase() === countryName
            || i.alpha3Code.toLowerCase() === countryName)
        )
    }
    const commonSettings = () => {
        const inputValue = input.trim().toLowerCase()
        let isCountryInArray = checkCountriesArray(inputValue)
        if (isCountryInArray) {
            props.setCurrentCountry(isCountryInArray)
        } else return inputValue
    }
    const onClickHandler = () => {
        const inputValue = commonSettings();
        if (inputValue) props.getCountry(inputValue)
    }
    const onKeyPressHandler = (e) => {
        if (e.key === 'Enter') {
            const inputValue = commonSettings();
            if (inputValue) {
                props.getCountry(inputValue);
            }
        }
    }

    const onChangeHandler = (e) => {
        e.preventDefault();
        setInput(e.currentTarget.value)
    }

    return (
        <div className={styles.search_form}>
            <CSSTransition in={true} timeout={1000} classNames={'span'}>
                <div className={styles.field_title}>
                    <span className={styles.title}>{props.fieldTitle}:</span>
                </div>
            </CSSTransition>
            <div>
                <TextField
                    className={styles.field}
                    onChange={onChangeHandler}
                    onKeyPress={onKeyPressHandler}
                    label={props.labelTitle}
                    id="outlined-basic"
                    variant="outlined"
                    value={input}
                />
            </div>
            <div>
                <Button
                    onClick={onClickHandler}
                    className={styles.btn}
                    variant="contained"
                    color="primary"
                > Поиск
                </Button>
            </div>
        </div>
    )
}

