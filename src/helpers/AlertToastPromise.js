import { toast } from 'react-toastify';

export default function handleToastPromise({ variableLoading, isLoading = true, text = '', type = 'success' }) {
    toast.update(variableLoading, {
        render: text,
        type: type,
        isLoading: isLoading,
        closeOnClick: true,
        autoClose: 2000,
    });
}
