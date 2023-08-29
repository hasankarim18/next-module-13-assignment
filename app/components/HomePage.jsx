import React from 'react';
import SettingCookies from './HomeComponents/SettingCookies';
import ResponseRedirection from './HomeComponents/ResponseRedirection';
import HeaderModification from './HomeComponents/HeaderModification';

const HomePage = () => {
    return (
        <div className="container mx-auto">

            <SettingCookies />

            <hr/> 

            <ResponseRedirection />

            <hr/>

            <HeaderModification />
            <footer className="my-12"></footer>
        </div>
    );
};

export default HomePage;