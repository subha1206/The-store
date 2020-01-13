import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'
import './checkout.styles.scss'
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selector'
import CheckOutItem from '../../components/checkout-item/checkout-item.component'

const CheckOutPage = ({cartItems, total}) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map(
                cartItem => (
                    <CheckOutItem cartItem={cartItem} key={cartItem.id} />
                )
            )
        }
        <div className='total'>
            <span>TOTAL: {total}</span>
        </div>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(CheckOutPage)