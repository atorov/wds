import { Outlet } from 'react-router-dom';

function OutletWrapper() {
    return (
        <div className="container">
            <Outlet />
        </div>
    );
}

export default OutletWrapper;
