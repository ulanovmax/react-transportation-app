import { createBrowserRouter, Navigate } from 'react-router-dom';
import MainPage from '../pages/MainPage.tsx';
import RequestsPage from '../pages/RequestsPage.tsx';
import LoginPage from '../pages/LoginPage.tsx';
import NotFoundPage from '../pages/NotFoundPage.tsx';
import DashboardPage from '@/pages/DashboardPage.tsx';
import UserRequestsPage from '@/pages/UserRequestsPage.tsx';
import RequestsView from '@/pages/RequestsView.tsx';
import CreateOrderPage from '@/pages/orders/CreateOrderPage.tsx';
import CreateRequestPage from '@/pages/orders/CreateRequestPage.tsx';
import CreateDeliveryPage from '@/pages/orders/CreateDeliveryPage.tsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainPage />,

        children: [
            {
                index: true,
                element: <Navigate to="/dashboard" replace />,
            },
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
            {
                path: '/create-request',
                element: <CreateRequestPage />,
            },

            {
                path: '/create-order',
                element: <CreateOrderPage />,
            },

            {
                path: '/create-delivery',
                element: <CreateDeliveryPage />,
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
