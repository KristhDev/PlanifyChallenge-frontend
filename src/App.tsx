import { RouterProvider } from 'react-router-dom';

/* Router */
import { rootRouter } from './router';

/* Modules */
import { MainLayout } from './modules/ui';

const App = (): JSX.Element => {
  return (
    <MainLayout>
      <RouterProvider router={ rootRouter } />
    </MainLayout>
  );
}

export default App;