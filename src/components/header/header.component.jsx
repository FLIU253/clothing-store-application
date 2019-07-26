import React from'react';
import {Link} from 'react-router-dom';
import {auth} from '../../firebase/firebase.utils';
import {connect}  from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {ReactComponent as Logo} from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import {selectCartHidden} from '../../redux/cart/cart.selectors';
import {selectCurrentUser} from '../../redux/user/user.selector';

import './header.styles.scss';

const Header = ({currentUser, hidden}) => (
    <div className="header">
        <Link className = 'logo-container' to ="/">
            <Logo className = 'logo'/>
        </Link>
        <div className="options">
            <Link className = "option" to= "/shop">SHOP</Link>
            <Link className = "option" to= "/shop">CONTACT</Link>
            {
                currentUser ? (
                    <div className = "option" onClick = {() => auth.signOut()}>SIGN OUT</div>
                ): (
                    <Link className = "option" to = "/signin">SIGN IN</Link>
                )
            }
            <CartIcon/>
        </div>
       {
           hidden ? null :  <CartDropdown/>
       }
    </div>
);
//this nameing can be anything but mapStateToProps is standard with redux codebases
const mapStateToProps = createStructuredSelector ({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);