import { Navigate } from 'react-router-dom';
import * as AuthAPI from '../../services/auth-api';
import AdminReviewList from './AdminReviewList';

// rendering reviews list for admins and navigating unauthenticated users to the login form
function AuthLayout() {
    if (AuthAPI.isUserLoggedIn()) {
        return <AdminReviewList />;
    } else {
        return <Navigate replace to='/admin/login' />;
    }
}

export default AuthLayout;