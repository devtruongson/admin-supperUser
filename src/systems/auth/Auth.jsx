import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './auth.module.scss';
import { Col, Container, Row } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';
import { loginAdmin } from '../../services/authService';
import { useDispatch, useSelector } from 'react-redux';
import { loginSuccess } from '../../features/auth/authSlice';
import { swtoast } from '../../mixin/swal.mixin';
import { toast } from 'react-toastify';
import handleToastPromise from '../../helpers/AlertToastPromise';

const cx = classNames.bind(styles);

export default function Auth() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [isClickLogin, setIsClickLogin] = useState(false);

    const isLogin = useSelector((state) => state.authSlice.isLoginIn);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (isLogin) {
            navigate('/');
        }
    }, [isLogin, navigate]);

    const handleValidate = () => {
        let IsValid = true;
        const ArrClone = [email, password];
        for (let i = 0; i < ArrClone.length; i++) {
            if (!ArrClone[i]) {
                IsValid = false;
                alert('Vui lòng nhập trường này!');
                break;
            }
        }
        return IsValid;
    };

    async function handleSubmit(e) {
        e.preventDefault();
        setIsClickLogin(true);
        const check = handleValidate();
        if (!check || isClickLogin) return;

        let dataBuilder = {
            email,
            password,
        };
        const ID = toast.loading('Loading....');
        try {
            handleToastPromise({
                isLoading: true,
                text: 'Đang gửi dữ liệu của bạn lên server',
                type: 'success',
                variableLoading: ID,
            });
            const Res = await loginAdmin(dataBuilder);
            handleToastPromise({
                isLoading: false,
                text: 'Bạn đã đăng nhập thành công',
                type: 'success',
                variableLoading: ID,
            });
            if (Res.statusCode === 200) {
                dispatch(loginSuccess(Res.data));
                navigate('/');
            }
        } catch (error) {
            setIsClickLogin(false);
            swtoast.error({
                text: Array.isArray(error?.response?.data?.message)
                    ? error?.response?.data?.message.join('')
                    : error?.response?.data?.message,
            });
            handleToastPromise({
                isLoading: false,
                text: Array.isArray(error?.response?.data?.message)
                    ? error?.response?.data?.message.join('')
                    : error?.response?.data?.message,
                type: 'error',
                variableLoading: ID,
            });
        }
    }

    return (
        <div className={cx('auth-wp')}>
            <Container>
                <Row>
                    <Col sm={7}>
                        <div>
                            <h1>Bán hàng chuyên nghiệp</h1>
                            <p>Quản lý shop của bạn một cách hiệu quả hơn trênz Shopee với Shopee - Kênh Người bán</p>
                            <img
                                src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/1ca4b84d90ef19f5819f6e1579c3835a.png"
                                alt="Hình ảnh"
                            />
                        </div>
                    </Col>
                    <Col sm={5}>
                        <div>
                            <form onSubmit={handleSubmit}>
                                <h3>Đăng nhập</h3>
                                <div>
                                    <div className="mb-3">
                                        <input
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            type="email"
                                            placeholder="Nhập email của bạn...."
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <input
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            type="password"
                                            placeholder="Nhập mật khẩu của bạn..."
                                            required
                                        />
                                    </div>
                                    <div className="mb-3 mt-5">
                                        <button type="submit" className={cx('submit', isClickLogin ? 'disable' : '')}>
                                            Đăng Nhập
                                        </button>
                                        <div className={cx('d-flex', 'justify-content-between', 'mt-1')}>
                                            <Link to="">Quên mật khẩu</Link>
                                            <Link to="">Đăng nhập với SMS</Link>
                                        </div>
                                    </div>
                                    <div className={cx('hr-type', 'd-flex justify-content-between align-items-center')}>
                                        <b></b>
                                        <span>HOẶC</span>
                                        <b></b>
                                    </div>
                                    <div
                                        className={cx(
                                            'social-login',
                                            'd-flex justify-content-between align-items-center mt-3',
                                        )}
                                    >
                                        <button>
                                            <i className="bi bi-facebook"></i>
                                            <span>Facebook</span>
                                        </button>
                                        <button>
                                            <i className="bi bi-google"></i>
                                            <span>Google</span>
                                        </button>
                                    </div>
                                    <div className={cx('no-account', 'mt-4')}>
                                        Bạn mới biết đến Shopee?
                                        <Link to="">Đăng ký</Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
