import type { ReactNode } from 'react';

type Props = {
    children: ReactNode;
    errorMessage?: string;
};

export function FormGroup({ children, errorMessage = '' }: Props) {
    return (
        <div className={`form-group ${errorMessage.length > 0 ? 'error' : ''}`}>
            {children}
            {errorMessage.length > 0 ? (
                <div className="msg">{errorMessage}</div>
            ) : null}
        </div>
    );
}
