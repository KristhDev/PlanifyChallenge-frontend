/* Components */
import { BottomTabs } from '../../components';
import { Outlet } from 'react-router-dom';

const MainLayout = (): JSX.Element => {
    return (
        <main className="dark:bg-neutral-200 h-svh flex flex-col justify-between">
            <div className="h-full">
                <Outlet />
            </div>

            <BottomTabs />
        </main>
    );
}

export default MainLayout;