import { Outlet , Link } from "react-router-dom"; 
import {Fragment, useContext} from "react"; 
import './navigation.styles.scss' 
import {ReactComponent as CrwnLogo} from '../../assets/crown.svg' ; 
import { UserContext } from "../../contexts/user.context";
import {signOutUser} from '../../utils/firebase/firebase.utils'; 
import CartIcon from "../../components/cart-icon/cart-icon.component"; 
import CartDropDown from "../../components/cart-dropdown/cart-dropdown.component";


const Navigation = () => { 
   const {currentUser} = useContext(UserContext); 

   console.log(currentUser); 
    return (
      <Fragment>
        <div className="navigation">
          <Link className="logo-container" to='/'>
            <CrwnLogo className="logo" />
          </Link>
          <div className="nav-links-container">
            <Link className='nav-link' to='/shop'>
              Shop
            </Link>  
            {currentUser ? (
              <span className="nav-link" onClick={signOutUser}>SIGN OUT</span>
            ):(
              <Link className="signin-link" to='/auth'>
              Sign in 
              </Link>    
            )}
            <CartIcon />
          </div>
        <CartDropDown /> 
        </div>
        <Outlet />
      </Fragment>
    );
  }; 

  export default Navigation; 
  
