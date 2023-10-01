import { useEffect, type ReactNode } from 'react';
import { createPortal } from 'react-dom';

type Props = {
    children: ReactNode;
    isOpen: boolean;
    onClose: () => void;
    onOpen: () => void;
};

export default function CustomModal({
    children,
    isOpen,
    onClose,
    onOpen,
}: Props) {
    useEffect(() => {
        function handler(event: KeyboardEvent) {
            if (event.key === 'Escape') {
                onClose();
            } else if (event.key === 'c') {
                onOpen();
            }
        }

        document.addEventListener('keydown', handler);

        return () => {
            document.removeEventListener('keydown', handler);
        };
    }, [onClose, onOpen]);

    return createPortal(
        <div className={`modal-overlay ${isOpen ? 'show' : null}`}>
            <div className="modal">{children}</div>
        </div>,
        document.getElementById('modal-container')!
    );
}
