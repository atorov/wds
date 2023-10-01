import { ScrollRestoration } from 'react-router-dom';
import NavBar from './NavBar';
import OutletWrapper from './OutletWrapper';

function Root() {
    return (
        <>
            <NavBar />
            <ScrollRestoration />
            <OutletWrapper />
        </>
    );
}

export default Root;
