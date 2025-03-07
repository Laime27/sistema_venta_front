import Login from "@/modulos/login/page";
import Dashboard from "@/modulos/layouts/dashboard";
import Categorias from "@/modulos/categorias/page";
import ProtectedRoute from "./ProtectedRoute";

export const routes = [
    {
        path: "/",
        element: <Login />,
    },
    {
        path: "/dashboard",
        element: (
            <ProtectedRoute>
                <Dashboard />
            </ProtectedRoute>
        ),
        children: [
            {
                path: "/dashboard/categorias",
                element: (
                    <ProtectedRoute>
                        <Categorias />
                    </ProtectedRoute>
                ),
            },
        ],
    },
];
