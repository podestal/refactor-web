import { createBrowserRouter } from 'react-router-dom';
import PublicRoutes from '../components/auth/PublicRoutes';
// import MainPage from '../pages/MainPage';
import ProjectPage from '../pages/ProjectPage';

const routes = createBrowserRouter([
    {
        path: '/',
        element: <PublicRoutes />,
        children: [
            {
                path: '/',
                element: <ProjectPage />
            }
        ]
    }
])

export default routes