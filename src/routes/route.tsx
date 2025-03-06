
import Login from '@/modulos/login/page'
import Dashboard from '@/modulos/layouts/dashboard'


export const routes = [
    {
        path: "/",
        element: <Login />
    },
    {
        path: "/dashboard",
        element: <Dashboard />,
        children:[
            {
                
                
            },
    ]
    }
];