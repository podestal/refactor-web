import { createBrowserRouter } from 'react-router-dom';
import PublicRoutes from '../components/auth/PublicRoutes';
import MainPage from '../pages/MainPage';

const routes = createBrowserRouter([
    {
        path: '/',
        element: <PublicRoutes />,
        children: [
            {
                path: '/',
                element: <MainPage />
            }
        ]
    }
])

export default routes