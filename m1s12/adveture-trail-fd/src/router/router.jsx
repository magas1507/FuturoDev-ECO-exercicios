import { createBrowserRouter } from 'react-router-dom'
import App from "../App.jsx";

import HomePage from '../pages/HomePage/index.jsx'
import RegisterPage from '../pages/RegisterPage/index.jsx'
import ExplorerPage from '../pages/ExplorerPage/index.jsx'



const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <div>Error Paage </div>,
        children: [
            {
                path: '/',
                element: <HomePage/>,
            },
            {
                path: '/register-page',
                element: <RegisterPage />,
            },
            {
                path: '/explorer-page',
                element: <ExplorerPage />,
            },
        ]

    }
]);


export default router;