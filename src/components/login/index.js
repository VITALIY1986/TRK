
import { useAuth } from '../login-function/hooks';
import Login from './login-form';
import Profile from '../profile';

 
 const Account = () => {
     const { isLoggedIn } = useAuth();
     const ViewComponent = isLoggedIn ? Profile : Login;
    
     return (
        <>
        <ViewComponent/>
            
     </>
     );
 };
 
 export default Account;

