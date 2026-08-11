import { createBrowserRouter } from 'react-router';
import { Welcome } from './pages/Welcome';
import { Dashboard } from './pages/Dashboard';
import { Admin } from './pages/Admin';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Welcome,
  },
  {
    path: '/dashboard',
    Component: Dashboard,
  },
  {
    path: '/admin',
    Component: Admin,
  },
]);