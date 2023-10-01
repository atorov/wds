import { useState } from 'react';
import { DEFAULT_AUTO_DISMISS_TIMEOUT } from '../../lib/toast/constants';
import useToasts from '../../lib/toast/context/use-toasts';
import type { Align, ToastItem } from '../../lib/toast/types';
import classes from './style.module.css';

function Form() {
    const [body, setBody] = useState<ToastItem['body']>('');
    const [align, setAlign] = useState<Align | ''>('');
    const [autoDismiss, setAutoDismiss] = useState(true);
    const [autoDismissTimeout, setAutoDismissTimeout] = useState(
        DEFAULT_AUTO_DISMISS_TIMEOUT / 1000
    );

    const [toasts, dispatch] = useToasts();

    return (
        <form
            className={classes.form}
            onSubmit={(event) => {
                event.preventDefault();
                dispatch({
                    type: 'ADD',
                    payload: {
                        body,
                        align: align || undefined,
                        autoDismiss,
                        autoDismissTimeout:
                            autoDismissTimeout * 1000 || undefined,
                    },
                });
                setBody('');
                setAlign('');
                setAutoDismiss(true);
                setAutoDismissTimeout(DEFAULT_AUTO_DISMISS_TIMEOUT / 1000);
            }}
        >
            <label htmlFor="body">
                Body&nbsp;
                <input
                    id="body"
                    type="text"
                    value={body}
                    onChange={(event) => {
                        setBody(event.target.value);
                    }}
                />
            </label>
            <label htmlFor="align">
                Align&nbsp;
                <select
                    id="align"
                    value={align}
                    onChange={(event) => {
                        setAlign(event.target.value as Align | '');
                    }}
                >
                    <option value="">Default</option>
                    <option value="top-left">Top Left</option>
                    <option value="top-center">Top Center</option>
                    <option value="top-right">Top Right</option>
                    <option value="bottom-left">Bottom Left</option>
                    <option value="bottom-center">Bottom Center</option>
                    <option value="bottom-right">Bottom Right</option>
                </select>
            </label>
            <label htmlFor="autoDismissTimeout">
                Auto Dismiss Timeout&nbsp;
                <input
                    id="autoDismissTimeout"
                    type="number"
                    value={autoDismissTimeout}
                    onChange={(event) => {
                        const next = Number(event.target.value);
                        setAutoDismissTimeout(next);
                        setAutoDismiss(next > 0);
                    }}
                />
            </label>
            <label htmlFor="autoDismiss">
                <input
                    id="autoDismiss"
                    type="checkbox"
                    checked={autoDismiss}
                    onChange={() => {
                        setAutoDismiss((prev) => {
                            const next = !prev;
                            if (!next) {
                                setAutoDismissTimeout(0);
                            }
                            return next;
                        });
                    }}
                />
                &nbsp;Auto Dismiss
            </label>
            <button type="submit" disabled={!body}>
                Add the {toasts.length + 1}-th Toast
            </button>
        </form>
    );
}

export default Form;
