import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Header from '../../systems/components/Header/Header';
import { RouterDTO } from '../../utils/routers.dto';

export default function Layout({ children }) {
    const [isShowHeader, setIsShowHeader] = useState(true);

    useEffect(() => {
        if (window.location.pathname === RouterDTO.auth.login) {
            setIsShowHeader(false);
        } else {
            setIsShowHeader(true);
        }
    }, []);

    return (
        <div>
            {isShowHeader && <Header />}
            {children}
        </div>
    );
}

Layout.propTypes = {
    children: PropTypes.node,
};
