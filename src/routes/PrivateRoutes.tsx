import { useAppSelector } from "@/redux/hooks";
import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";

interface IProps {
    children: ReactNode;
}
export default function PrivateRoutes({ children }: IProps) {
    const { user, isLoading } = useAppSelector((state) => state.user);
    const { pathname } = useLocation();
    if (isLoading) {
        return <p>Loading</p>;
    }
    if (!user.email && !isLoading) {
        sessionStorage.setItem('previousPrivateRoute', pathname);
        return <Navigate to='/login' />;
    }
    return children;
}
