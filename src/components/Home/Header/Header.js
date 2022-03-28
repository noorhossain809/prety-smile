import React from 'react';
import BussinessInfo from '../BussinessInfo/BussinessInfo';
import HeaderMain from '../HeaderMain/HeaderMain';

import './Header.css'
import Navbars from '../../Shared/Navbars/Navbars';

const Header = () => {
    return (
        <div className="header-main">
            <Navbars></Navbars>
            <HeaderMain></HeaderMain>
            <BussinessInfo></BussinessInfo>
        </div>
    );
};

export default Header;