import React from 'react';
import classNames from 'classnames/bind';
import { Tooltip } from 'antd';

import styles from './header.module.scss';
import { BASE_URL } from '../../../utils/constant';

const cx = classNames.bind(styles);

export default function Header() {
    return (
        <div className={cx('header-wp', 'px-3')}>
            <div className={cx('left')}>
                <img className={cx('logo-web')} src={BASE_URL + '/upload/folder/Shopee.svg.png'} alt="Logo website" />
            </div>
            <div className={cx('right')}>
                <Tooltip title="Render Menu Tại Đây">
                    <div className={cx('account')}>
                        <img className={cx('avatar')} src={BASE_URL + '/upload/folder/not-avata.png'} alt="Avatar" />
                        <span>Shop Truong Son</span>
                    </div>
                </Tooltip>
            </div>
        </div>
    );
}
