import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import 'dayjs/locale/es';

import { date } from './utils';

import './index.css';

date.locale('es');

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
