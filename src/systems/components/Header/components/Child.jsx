/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { DanhMucShopIcon, FlashSaleIcon, SettingIcon, VoicherIcon } from '../../../../assets/icons/icons';

export function FeatureHeader({ cx }) {
    return (
        <div className={cx('feature-wp')}>
            <Link to="/" className="w-33-custom">
                <div>
                    <VoicherIcon />
                </div>
                Voicher
            </Link>
            <Link to="/" className="w-33-custom">
                <div>
                    <DanhMucShopIcon />
                </div>
                Danh mục của Shop
            </Link>
            <Link to="/" className="w-33-custom">
                <div>
                    <FlashSaleIcon />
                </div>
                Flash Sale
            </Link>
            <Link to="/" className="w-33-custom">
                <div>
                    <SettingIcon />
                </div>
                Setting
            </Link>
        </div>
    );
}

export function PopperMenu({ cx }) {
    return (
        <>
            <div className={cx('menu-popper')}>
                <ul>
                    <li>
                        <i className="bi bi-file-person"></i>
                        Tài khoản
                    </li>
                    <li>
                        <i className="bi bi-box-arrow-right"></i>Đăng Xuất
                    </li>
                </ul>
            </div>
        </>
    );
}
