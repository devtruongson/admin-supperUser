import RouterComponent from '../routers/routerComponent';
import '../globalStyle/globalStyles.css';
import CheckDeviceSingle from '../components/CheckDeviceSingle/CheckDeviceSingle';
import { ToastContainer } from 'react-toastify';

function App() {
    return (
        <>
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
        </>
    );
}

export default App;
