const requestURL = `https://restcountries.eu/rest/v2/`


export function getCountryByName (countryName) {
    return fetch(requestURL + `name/${countryName}?fullText=true`)
        .then( response => response.json() )
}
export function getCountryByCode (code) {
    return fetch(requestURL + `alpha/${code}`)
        .then( response => response.json() )
}

