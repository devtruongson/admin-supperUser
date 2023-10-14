import React from 'react';
import classNames from 'classnames/bind';

import NotifyHeader from '../../components/Header/components/Notify';
import styles from './notification-page.module.scss';
import { Pagination } from 'antd';

const cx = classNames.bind(styles);

export default function NotifyPage() {
    return (
        <div>
            <NotifyHeader className={cx('notify-page')}>
                <Pagination size="small" total={50} />
            </NotifyHeader>
        </div>
    );
}
