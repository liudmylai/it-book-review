import { Navigate } from 'react-router-dom';
import * as AuthAPI from '../services/auth-api';
import AdminReviewList from './admin/AdminReviewList';

function AuthLayout() {
    if (AuthAPI.isUserLoggedIn()) {
        return <AdminReviewList />;
    } else {
        return <Navigate replace to='/admin/login' />;
    }
}

export default AuthLayout;