import { createBrowserRouter } from 'react-router-dom';
import MainPage from '../pages/MainPage.tsx';
import RequestsPage from '../pages/RequestsPage.tsx';
import LoginPage from '../pages/LoginPage.tsx';
import NotFoundPage from '../pages/NotFoundPage.tsx';
import DashboardPage from '@/pages/DashboardPage.tsx';
import UserRequestsPage from '@/pages/UserRequestsPage.tsx';
import RequestsView from '@/pages/RequestsView.tsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainPage />,

        children: [
            {
                path: '/dashboard',
                element: <DashboardPage />,
            },
            {
                path: '/requests',
                element: <RequestsPage />,
            },
            {
                path: '/:id/requests',
                element: <UserRequestsPage />,

                children: [
                    {
                        path: ':id',
                        element: <RequestsView />,
                    },
                ],
            },
        ],
        errorElement: <NotFoundPage />,
    },

    {
        path: '/login',
        element: <LoginPage />,
    },
]);

export default router;
