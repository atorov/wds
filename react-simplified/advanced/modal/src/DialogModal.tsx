import { useEffect, useRef, type ReactNode } from 'react';
import { createPortal } from 'react-dom';

type Props = {
    children: ReactNode;
    isOpen: boolean;
    onClose: () => void;
    onOpen: () => void;
};

export default function DialogModal({ children, onClose, isOpen }: Props) {
    console.log(
        '🚀 TODO: ~ file: DialogModal.tsx:12 ~ DialogModal ~ isOpen:',
        isOpen
    );
    const ref = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        if (isOpen) {
            ref.current?.showModal();
        } else {
            ref.current?.close();
        }
    }, [isOpen]);

    useEffect(() => {
        ref.current?.addEventListener('close', onClose);

        const current = ref.current;
        return () => {
            current?.removeEventListener('close', onClose);
        };
    }, [onClose]);

    return createPortal(
        <dialog ref={ref}>{children}</dialog>,
        document.getElementById('dialog-container')!
    );
}
