import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { HandleApi } from '../../services/HandleApi';
import { checkDeviceService } from '../../services/deviceService';
import { useNavigate } from 'react-router-dom';
import { swalert, swtoast } from '../../mixin/swal.mixin';
import { logoutService } from '../../services/authService';
import { logoutAction } from '../../features/auth/authSlice';

export default function CheckDeviceSingle({ children }) {
    const isLogin = useSelector((state) => state.authSlice.isLoginIn);
    const _token_device = useSelector((state) => state.authSlice._token_device);
    const navigate = useNavigate();

    const dispatch = useDispatch();

    async function handlleDispatLogoutAndCallAPI() {
        dispatch(logoutAction());
        isLogin ? await logoutService() : '';
    }

    useEffect(() => {
        if (_token_device && isLogin) {
            const _fetch = async () => {
                try {
                    const Res = await HandleApi(checkDeviceService, _token_device);
                    if (!Res?.data?.successful) {
                        await handlleDispatLogoutAndCallAPI();
                        swalert
                            .fire({
                                title: 'Có lỗi xảy ra',
                                icon: 'error',
                                toast: true,
                                text: Res?.data?.message,
                                showConfirmButton: true,
                            })
                            .then(async (result) => {
                                if (result.isConfirmed) {
                                    navigate('/auth/login');
                                }
                            });
                    }
                } catch (error) {
                    if (error?.response?.data?.message) {
                        swalert
                            .fire({
                                title: 'Có lỗi xảy ra',
                                icon: 'error',
                                toast: true,
                                text: error?.response?.data?.message,
                                showConfirmButton: true,
                            })
                            .then(async (result) => {
                                if (result.isConfirmed) {
                                    await handlleDispatLogoutAndCallAPI();
                                    navigate('/auth/login');
                                }
                            });
                    }
                }
            };

            _fetch();
        } else {
            handlleDispatLogoutAndCallAPI();
            navigate('/auth/login');
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [navigate]);

    return <>{children}</>;
}

CheckDeviceSingle.propTypes = {
    children: PropTypes.node,
};
