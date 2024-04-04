import { Outlet } from 'react-router-dom';

/* Components */
import { BottomTabs } from '../../components';

const MainLayout = (): JSX.Element => {
    return (
        <main className="relative bg-neutral-100 min-h-svh flex flex-col justify-between">
            <div className="flex-1 p-6 pb-24 bg-neutral-100">
                <Outlet />
            </div>

            <BottomTabs />
        </main>
    );
}

export default MainLayout;