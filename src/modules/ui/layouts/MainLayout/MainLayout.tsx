import { Outlet } from 'react-router-dom';

/* Components */
import { BottomTabs, Navbar } from '../../components';

/**
 * Main layout component that renders the main content of the application.
 *
 * @return {JSX.Element} The main layout JSX element
 */
const MainLayout = (): JSX.Element => {
    return (
        <main className="relative bg-neutral-100 min-h-svh flex flex-col justify-between">
            <Navbar />

            <div className="flex-1 p-6 pb-24 bg-neutral-100">
                <Outlet />
            </div>

            <BottomTabs />
        </main>
    );
}

export default MainLayout;