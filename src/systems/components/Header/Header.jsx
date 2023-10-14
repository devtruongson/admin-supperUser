import React from 'react';
import classNames from 'classnames/bind';
import { Button, Popover } from 'antd';

import styles from './header.module.scss';
import { BASE_URL } from '../../../utils/constant';
import { FeatureHeader, PopperMenu } from './components/Child';
import NotifyHeader from './components/Notify';

const cx = classNames.bind(styles);

export default function Header() {
    return (
        <div className={cx('header-wp', 'px-3')}>
            <div className={cx('left')}>
                <img className={cx('logo-web')} src={BASE_URL + '/upload/folder/Shopee.svg.png'} alt="Logo website" />
            </div>
            <div className={cx('right')}>
                <Popover content={<PopperMenu cx={cx} />}>
                    <div className={cx('account')}>
                        <img className={cx('avatar')} src={BASE_URL + '/upload/folder/not-avata.png'} alt="Avatar" />
                        <span>Shop Truong Son</span>
                    </div>
                </Popover>
                <div className={cx('feature')}>
                    <Popover content={<FeatureHeader cx={cx} />}>
                        <i className="bi bi-grid-3x3-gap"></i>
                    </Popover>
                </div>
                <div className={cx('notify')}>
                    <Popover content={<NotifyHeader />}>
                        <i className="bi bi-bell"></i>
                    </Popover>
                </div>
                <div
                    style={{
                        marginLeft: 30,
                    }}
                >
                    <Button type="primary">Trang Chủ Shoppe</Button>
                </div>
            </div>
        </div>
    );
}
