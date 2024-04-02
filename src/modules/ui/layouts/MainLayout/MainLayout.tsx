import { FC, PropsWithChildren } from 'react';

/* Components */
import { BottomTabs } from '../../components';


const MainLayout: FC<PropsWithChildren> = ({ children }): JSX.Element => {
    return (
        <main className="dark:bg-neutral-200 h-svh flex flex-col justify-between">
            <div className="h-full">
                { children }
            </div>

            <BottomTabs />
        </main>
    );
}

export default MainLayout;