import React from 'react';
import PropTypes from 'prop-types';
import './PoperrWrapper.css';

export default function PopperWrapper({ children, className = '' }) {
    return <div className={`popper-wrapper ${className}`}>{children}</div>;
}

PopperWrapper.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};
