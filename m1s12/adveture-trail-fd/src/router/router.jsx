import { createBrowserRouter } from 'react-router-dom'
import HomePage from '../pages/HomePage/index.jsx'
import ListPage from '../pages/ListPage/index.jsx'
import RegisterPage from '../pages/RegisterPage/index.jsx'
import App from "../App.jsx";


const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <HomePage />,
            },
            {
                path: 'cadastro',
                element: <RegisterPage />,
            },
            {
                path: 'lista',
                element: <ListPage />,
            },
        ]

    }
]);

export default router;