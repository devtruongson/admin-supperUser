import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { HandleApi } from '../../../../services/HandleApi';
import { getNotifyService } from '../../../../services/notifyService';

export default function NotifyHeader({ cx }) {
    const [notifys, setNotifys] = useState([]);

    useEffect(() => {
        const _fetch = async () => {
            try {
                const Res = await HandleApi(getNotifyService, {
                    page: 1,
                    pageSize: 10,
                });

                setNotifys(Res.items);
            } catch (error) {
                console.log(error);
            }
        };

        _fetch();
    }, []);

    console.log(notifys);

    return (
        <div className={cx('notify-wp')}>
            <div className={cx('notify-header')}>
                <span>Thông Báo Gần Đây</span>
                <button>Đánh dấu đã đọc tất cả</button>
            </div>
            <div className={cx('notify-body')}>
                {notifys &&
                    notifys.length > 0 &&
                    notifys.map((item) => (
                        <div key={item.slug} className={cx('item')}>
                            <img
                                src="https://cf.shopee.vn/file/07b48cd255a12f6d06e80bf0fefba28c"
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
                <Link to="/">Xem tất cả thông báo</Link>
            </div>
        </div>
    );
}

NotifyHeader.propTypes = {
    cx: PropTypes.func,
};
