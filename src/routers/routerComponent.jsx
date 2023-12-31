import { Route, Routes } from 'react-router-dom';
import { RouterDTO } from '../utils/routers.dto';
import PrivateRouter from '../components/PrivateRouter/PrivateRouter';
import Home from '../systems/page/Home/Home';
import Auth from '../systems/auth/Auth';
import NotifyPage from '../systems/page/Notify/Notify';

export default function RouterComponent() {
    return (
        <>
            <Routes>
                <Route
                    path={RouterDTO.notify}
                    element={
                        <PrivateRouter>
                            <NotifyPage />
                        </PrivateRouter>
                    }
                />
                <Route
                    path={RouterDTO.home}
                    element={
                        <PrivateRouter>
                            <Home />
                        </PrivateRouter>
                    }
                />
                <Route path={RouterDTO.auth.login} element={<Auth />} />
            </Routes>
        </>
    );
}
