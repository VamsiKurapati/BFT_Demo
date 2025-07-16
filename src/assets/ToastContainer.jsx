import { ToastContainer as ToastContainerComponent } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ToastContainer = () => {
    return (
        <ToastContainerComponent position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover
            toastClassName={(context) =>
                context?.type === "success"
                    ? "bg-green-500 text-white font-poppins rounded-lg text-center p-4 w-[300px] text-sm font-bold"
                    : context?.type === "error"
                        ? "bg-red-500 text-white font-poppins rounded-lg text-center p-4 w-[300px] text-sm font-bold"
                        : undefined
            }
        />
    );
};

export default ToastContainer;