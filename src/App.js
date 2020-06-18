import React from 'react';
import styles from './App.module.scss';
import {Header} from "./Header/Header";
import {Content} from "./Content/Content";
import {SearchForm} from "./Search-form/Search-form";

function App() {
    return (
        <div className={styles.app}>
            <div className={styles.container}>
                <Header/>
                <SearchForm />
                <Content/>
            </div>
        </div>
    );
}

export default App;
