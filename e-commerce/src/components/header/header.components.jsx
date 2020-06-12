import React from "react";
import {Link, useHistory} from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

//auth google
import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.components";
import { selectCartHidden } from "../../redux/cart/cart.selector";
import { selectCurrentUser } from "../../redux/user/user.selector";

//scss
import "./header.styles.scss";

const Header = ({ currentUser, hidden }) => {
    const history = useHistory()

    return(
        <div className="header">
            <Link className="logo-container" to="/">
                <h1 className="logo">
                    S<span style={{ color: "red" }}>K</span>
                </h1>
            </Link>
            <div className="options">


                {currentUser ? (
                    <div className="option" onClick={() => auth.signOut()}>
                        SIGN OUT
                    </div>
                ) : (
                    <Link className="option" to="/">
                        SIGN IN
                    </Link>
                )}
                <CartIcon />
            </div>
            {hidden ? null : <CartDropdown />}
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
