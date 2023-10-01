import { useState } from 'react';
import CustomModal from './CustomModal';
import DialogModal from './DialogModal';
import './style.css';

function App() {
    const [isOpenCustomModal, setIsOpenCustomModal] = useState(false);

    function handleCloseCustomModal() {
        setIsOpenCustomModal(false);
    }

    function handleOpenCustomModal() {
        setIsOpenCustomModal(true);
    }

    const [isOpenDialogModal, setIsOpenDialogModal] = useState(false);

    function handleCloseDialogModal() {
        setIsOpenDialogModal(false);
    }

    function handleOpenDialogModal() {
        setIsOpenDialogModal(true);
    }

    return (
        <>
            <button onClick={handleOpenCustomModal}>Show Custom Modal</button>
            <br />
            <button onClick={handleOpenDialogModal}>Show Dialog Modal</button>

            <CustomModal
                isOpen={isOpenCustomModal}
                onClose={handleCloseCustomModal}
                onOpen={handleOpenCustomModal}
            >
                <p>
                    This is a <strong>CUSTOM</strong> modal
                </p>
                <button onClick={handleCloseCustomModal}>Close</button>
            </CustomModal>

            <DialogModal
                isOpen={isOpenDialogModal}
                onClose={handleCloseDialogModal}
                onOpen={handleOpenDialogModal}
            >
                <p>
                    This is a <strong>DIALOG</strong> modal
                </p>
                <button onClick={handleCloseDialogModal}>Close</button>
            </DialogModal>
        </>
    );
}

export default App;
