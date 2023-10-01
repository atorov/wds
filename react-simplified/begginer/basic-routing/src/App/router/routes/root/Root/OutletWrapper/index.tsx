import { Outlet, useNavigation } from 'react-router-dom';

function OutletWrapper() {
    const { state } = useNavigation();
    const isLoading = state === 'loading';

    return (
        <>
            {isLoading ? <div className="loading-spinner" /> : null}
            <div className={`container ${isLoading ? 'loading' : ''}`}>
                <Outlet />
            </div>
        </>
    );
}

export default OutletWrapper;
