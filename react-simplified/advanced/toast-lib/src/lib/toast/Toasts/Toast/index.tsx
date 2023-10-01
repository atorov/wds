import { useEffect } from 'react';
import { DEFAULT_AUTO_DISMISS_TIMEOUT } from '../../constants';
import useToasts from '../../context/use-toasts';
import type { ToastItem } from '../../types';
import classes from './style.module.css';

type Props = {
    toast: ToastItem;
};

function Toast({ toast }: Props) {
    const [, dispatch] = useToasts();

    useEffect(() => {
        let t: number;
        if (toast.autoDismiss) {
            setTimeout(() => {
                dispatch({ type: 'REMOVE', payload: toast.id });
            }, toast.autoDismissTimeout ?? DEFAULT_AUTO_DISMISS_TIMEOUT);
        }
        return () => {
            if (t) {
                clearTimeout(t);
            }
        };
    }, [dispatch, toast.autoDismiss, toast.autoDismissTimeout, toast.id]);

    return (
        <div
            className={classes.toast}
            onClick={() => {
                dispatch({ type: 'REMOVE', payload: toast.id });
            }}
        >
            {toast.body}
        </div>
    );
}

export default Toast;
