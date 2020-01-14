import React from 'react'
import { connect } from 'react-redux'
import { selectCartItems } from '../../redux/cart/cart.selector'
import { selectCurrentUser } from '../../redux/user/user.selector'
import CustomButton from '../custom-button/custom-button.component'
import CartItem from '../cart-item/cart-item.component'
import {toggleCartHidden } from  '../../redux/cart/cart.actions'
import { createStructuredSelector } from 'reselect'
import { withRouter } from 'react-router-dom'
import './cart-dropdown.styles.scss'

const CartDropDown = ({ cartItems, history, dispatch, currentUser}) => {
    return (
    <div className='cart-dropdown'>
        <div className='cart-items'> 
        {cartItems.length ? (
            cartItems.map(cartItem => <CartItem key={cartItem.id} items={cartItem} />))
                          : currentUser ? (
                          (<span className='empty-message'>Hii {currentUser.displayName}, Your Cart is Empty</span>))
                          : ((<span className='empty-message'>Hii Stranger, Your Cart is Empty</span>))
                          
          
        }
        </div>
            <CustomButton onClick = {() => {
                 dispatch(toggleCartHidden())
                 history.push('/checkout')}
                 }>CHECKOUT</CustomButton>
    </div>
)}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    currentUser: selectCurrentUser
}) 

export default withRouter(connect(mapStateToProps)(CartDropDown))