import RouterComponent from '../routers/routerComponent';
import '../globalStyle/globalStyles.css';
import CheckDeviceSingle from '../components/CheckDeviceSingle/CheckDeviceSingle';
import { ToastContainer } from 'react-toastify';
import Layout from '../components/Layout/Layout';
import { useEffect } from 'react';
import { HandleApi } from '../services/HandleApi';
import { getNotifyService } from '../services/notifyService';
import { useDispatch, useSelector } from 'react-redux';
import { getNotify } from '../features/app/appSlice';

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getNotify({ page: 1, pageSize: 10 }));
    }, [dispatch]);

    return (
        <Layout>
            <CheckDeviceSingle>
                <RouterComponent />
            </CheckDeviceSingle>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </Layout>
    );
}

export default App;
