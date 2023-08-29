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
            
        </div>
    );
};

export default HomePage;