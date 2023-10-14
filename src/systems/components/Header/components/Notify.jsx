import React, { useEffect, useState } from 'react';
import PropTypes, { func, string } from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import { HandleApi } from '../../../../services/HandleApi';
import { getNotifyService, updateViewNotifications } from '../../../../services/notifyService';
import { BASE_URL } from '../../../../utils/constant';

import styles from './Notify.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { viewNotifiAction } from '../../../../features/app/appSlice';
const cx = classNames.bind(styles);

export default function NotifyHeader({ className = '', children }) {
    const notification = useSelector((state) => state.appSlice.notifications);

    const dispatch = useDispatch();

    async function handleClickViewNotification(item) {
        dispatch(viewNotifiAction(item));
        // call  API
        await HandleApi(updateViewNotifications, {
            'id[]': item.id,
        });
    }

    return (
        <div className={cx('notify-wp', `${className}`)}>
            <div className={cx('notify-header')}>
                <span>Thông Báo Gần Đây</span>
                <button>Đánh dấu đã đọc tất cả</button>
            </div>
            <div className={cx('notify-body')}>
                {notification &&
                    notification.length > 0 &&
                    notification.map((item) => (
                        <div key={item.slug} className={cx('item')} onClick={() => handleClickViewNotification(item)}>
                            {!item.is_view ? <span>Chua Xem</span> : <span>Da Xem</span>}
                            <img
                                src={`${BASE_URL}/${
                                    item.thumbnail_url ? item.thumbnail_url : 'upload/folder/thongbao.png'
                                }`}
                                alt="Hình ảnh thông báo"
                            />
                            <div>
                                <h4>{item.title}</h4>
                                <p>{item.description}</p>
                                <span>{new Date(item.time).toLocaleString()}</span>
                            </div>
                        </div>
                    ))}
            </div>
            <div className={cx('notify-footer')}>
                {children ? children : <Link to="/notifications">Xem tất cả thông báo</Link>}
            </div>
        </div>
    );
}

NotifyHeader.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
};
