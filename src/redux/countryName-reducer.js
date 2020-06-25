import {getCountryByCode, getCountryByName} from "../api/api";


const SET_COUNTRY = 'countryName-reducer/SET_COUNTRY'
const SET_CURRENT_COUNTRY = 'countryName-reducer/SET_CURRENT_COUNTRY'

let initialState = {
    currentCountry: {
        "name":
            "Russian Federation",
        "topLevelDomain":
            [
                ".ru"
            ],
        "alpha2Code":
            "RU",
        "alpha3Code":
            "RUS",
        "callingCodes":
            [
                "7"
            ],
        "capital":
            "Moscow",
        "altSpellings":
            [
                "RU",
                "Rossiya",
                "Russian Federation",
                "Российская Федерация",
                "Rossiyskaya Federatsiya"
            ],
        "region":
            "Europe",
        "subregion":
            "Eastern Europe",
        "population":
            14659918, //3
        "latlng":
            [
                60.0,
                100.0
            ],
        "demonym":
            "Russian",
        "area":
            17124442,
        "gini":
            40.1,
        "timezones":
            [
                "UTC+03:00",
                "UTC+04:00",
                "UTC+06:00",
                "UTC+07:00",
                "UTC+08:00",
                "UTC+09:00",
                "UTC+10:00",
                "UTC+11:00",
                "UTC+12:00"
            ],
        "borders":
            [
                "AZE",
                "BLR",
                "CHN",
                "EST",
                "FIN",
                "GEO",
                "KAZ",
                "PRK",
                "LVA",
                "LTU",
                "MNG",
                "NOR",
                "POL",
                "UKR"
            ],
        "nativeName":
            "Россия",
        "numericCode":
            "643",
        "currencies":
            [
                {
                    "code": "RUB",
                    "name": "Russian ruble",
                    "symbol": "₽"
                }
            ],
        "languages":
            [
                {
                    "iso639_1": "ru",
                    "iso639_2": "rus",
                    "name": "Russian",
                    "nativeName": "Русский"
                }
            ],
        "translations":
            {
                "de":
                    "Russland",
                "es":
                    "Rusia",
                "fr":
                    "Russie",
                "ja":
                    "ロシア連邦",
                "it":
                    "Russia",
                "br":
                    "Rússia",
                "pt":
                    "Rússia",
                "nl":
                    "Rusland",
                "hr":
                    "Rusija",
                "fa":
                    "روسیه"
            }
        ,
        "flag":
            "https://restcountries.eu/data/rus.svg",
        "regionalBlocs":
            [
                {
                    "acronym": "EEU",
                    "name": "Eurasian Economic Union",
                    "otherAcronyms": [
                        "EAEU"
                    ],
                    "otherNames": []
                }
            ],
        "cioc":
            "RUS"
    },
    countriesArray: [
        {
            "name":
                "Russian Federation",
            "topLevelDomain":
                [
                    ".ru"
                ],
            "alpha2Code":
                "RU",
            "alpha3Code":
                "RUS",
            "callingCodes":
                [
                    "7"
                ],
            "capital":
                "Moscow",
            "altSpellings":
                [
                    "RU",
                    "Rossiya",
                    "Russian Federation",
                    "Российская Федерация",
                    "Rossiyskaya Federatsiya"
                ],
            "region":
                "Europe",
            "subregion":
                "Eastern Europe",
            "population":
                14659918, //3
            "latlng":
                [
                    60.0,
                    100.0
                ],
            "demonym":
                "Russian",
            "area":
                17124442,
            "gini":
                40.1,
            "timezones":
                [
                    "UTC+03:00",
                    "UTC+04:00",
                    "UTC+06:00",
                    "UTC+07:00",
                    "UTC+08:00",
                    "UTC+09:00",
                    "UTC+10:00",
                    "UTC+11:00",
                    "UTC+12:00"
                ],
            "borders":
                [
                    "AZE",
                    "BLR",
                    "CHN",
                    "EST",
                    "FIN",
                    "GEO",
                    "KAZ",
                    "PRK",
                    "LVA",
                    "LTU",
                    "MNG",
                    "NOR",
                    "POL",
                    "UKR"
                ],
            "nativeName":
                "Россия",
            "numericCode":
                "643",
            "currencies":
                [
                    {
                        "code": "RUB",
                        "name": "Russian ruble",
                        "symbol": "₽"
                    }
                ],
            "languages":
                [
                    {
                        "iso639_1": "ru",
                        "iso639_2": "rus",
                        "name": "Russian",
                        "nativeName": "Русский"
                    }
                ],
            "translations":
                {
                    "de":
                        "Russland",
                    "es":
                        "Rusia",
                    "fr":
                        "Russie",
                    "ja":
                        "ロシア連邦",
                    "it":
                        "Russia",
                    "br":
                        "Rússia",
                    "pt":
                        "Rússia",
                    "nl":
                        "Rusland",
                    "hr":
                        "Rusija",
                    "fa":
                        "روسیه"
                }
            ,
            "flag":
                "https://restcountries.eu/data/rus.svg",
            "regionalBlocs":
                [
                    {
                        "acronym": "EEU",
                        "name": "Eurasian Economic Union",
                        "otherAcronyms": [
                            "EAEU"
                        ],
                        "otherNames": []
                    }
                ],
            "cioc":
                "RUS"
        },
    ],
}


export const countryNameReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_COUNTRY:
            return {
                ...state,
                countriesArray: [...state.countriesArray, action.payload]
            }
        case SET_CURRENT_COUNTRY:
            return {
                ...state,
                currentCountry: action.payload
            }
        default:
            return state
    }
}

export const setCountry = (payload) => ({type: SET_COUNTRY, payload});
export const setCurrentCountry = (payload) => ({type: SET_CURRENT_COUNTRY, payload})

export const getCountryDescription = async(countryIdentify, dispatch, ApiResponse) => {
    try {
        let response = await ApiResponse(countryIdentify); // общий код для getCountryDescriptionByName и getCountryDescriptionByCode
        dispatch(setCountry(...response))
        dispatch(setCurrentCountry(...response))
    } catch (error) {
        alert(error)
    }
}

export const getCountryDescriptionByName = (countryIdentify) => async (dispatch) => {
    await getCountryDescription(countryIdentify, dispatch, getCountryByName);
}

export const getCountryDescriptionByCode = (countryIdentify) => async (dispatch) => {
    await getCountryDescription(countryIdentify, dispatch, getCountryByName);

}




















