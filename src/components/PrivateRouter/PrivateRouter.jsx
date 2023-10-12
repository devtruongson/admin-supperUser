import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { checkSuperUser, logoutService } from '../../services/authService';
import { HandleApi } from '../../services/HandleApi';
import { useNavigate } from 'react-router-dom';
import { logoutAction } from '../../features/auth/authSlice';
import { useDispatch } from 'react-redux';

export default function PrivateRouter({ children }) {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    const dispatch = useDispatch();

    async function handlleDispatLogoutAndCallAPI() {
        dispatch(logoutAction());
        await logoutService();
    }

    useEffect(() => {
        const _fetch = async () => {
            try {
                const Res = await HandleApi(checkSuperUser);
                if (Res?.data?.isSuperAdmin) {
                    setUser(true);
                } else {
                    await handlleDispatLogoutAndCallAPI();
                    navigate('/auth/login');
                }
            } catch (error) {
                console.log(error);
            }
        };

        _fetch();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [navigate]);

    return <div>{user ? children : 'asd'}</div>;
}

PrivateRouter.propTypes = {
    children: PropTypes.node,
};
