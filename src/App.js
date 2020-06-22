import React from 'react';
import styles from './App.module.scss';
import {Header} from "./Header/Header";
import {ContentContainer} from "./Content/Content";
import {ContainerSearchForm} from "./Search-form/Search-form";

function App() {
    return (
        <div className={styles.app}>
            <div className={styles.container}>
                <Header/>
                <ContainerSearchForm />
                <ContentContainer />
            </div>
        </div>
    );
}

export default App;
