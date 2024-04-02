import { RouterProvider } from 'react-router-dom';

/* Context */
import { Provider } from './context';

/* Router */
import { rootRouter } from './router';

const App = (): JSX.Element => {
  return (
    <Provider>
      <RouterProvider router={ rootRouter } />
    </Provider>
  );
}

export default App;