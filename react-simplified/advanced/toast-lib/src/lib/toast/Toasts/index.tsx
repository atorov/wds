import { createPortal } from 'react-dom';
import useToasts from '../context/use-toasts';
import Toast from './Toast';
import classes from './style.module.css';

function Toasts() {
    const [toasts] = useToasts();

    const topLeftItems = toasts.filter((it) => it.align === 'top-left');
    const topCenterItems = toasts.filter((it) => it.align === 'top-center');
    const topRightItems = toasts.filter(
        (it) => !it.align || it.align === 'top-right'
    );
    const bottomLeftItems = toasts.filter((it) => it.align === 'bottom-left');
    const bottomCenterItems = toasts.filter(
        (it) => it.align === 'bottom-center'
    );
    const bottomRightItems = toasts.filter((it) => it.align === 'bottom-right');

    return createPortal(
        <>
            <div className={`${classes.allKinds} ${classes.topLeft}`}>
                {topLeftItems.map((toast) => (
                    <Toast key={toast.id} toast={toast} />
                ))}
            </div>
            <div className={`${classes.allKinds} ${classes.topCenter}`}>
                {topCenterItems.map((toast) => (
                    <Toast key={toast.id} toast={toast} />
                ))}
            </div>
            <div className={`${classes.allKinds} ${classes.topRight}`}>
                {topRightItems.map((toast) => (
                    <Toast key={toast.id} toast={toast} />
                ))}
            </div>
            <div className={`${classes.allKinds} ${classes.bottomLeft}`}>
                {bottomLeftItems.map((toast) => (
                    <Toast key={toast.id} toast={toast} />
                ))}
            </div>
            <div className={`${classes.allKinds} ${classes.bottomCenter}`}>
                {bottomCenterItems.map((toast) => (
                    <Toast key={toast.id} toast={toast} />
                ))}
            </div>
            <div className={`${classes.allKinds} ${classes.bottomRight}`}>
                {bottomRightItems.map((toast) => (
                    <Toast key={toast.id} toast={toast} />
                ))}
            </div>
        </>,
        document.querySelector('#toastContainer')!
    );
}

export default Toasts;
