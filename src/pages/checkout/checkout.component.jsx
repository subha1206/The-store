import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'
import './checkout.styles.scss'
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selector'
import CheckOutItem from '../../components/checkout-item/checkout-item.component'
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component'

const CheckOutPage = ({cartItems, total}) => (
    <div className='checkout-page'>
        <div className='checkout-header' >
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
            { total > 0 ? (<span>TOTAL: &#8377;{total}</span>)
                         : (<span></span>)
            }
        </div>
        <div className='test-warning'>
        { total > 0 ?(<span>
            *Please use this card for test payment, do not enter your original card details*
            <br />
            3056 9300 0902 0004 - Exp: 01/30 - CVV: 123 </span>)
                    :(<span></span>)
        }
        </div>
        { total > 0 ? <StripeCheckoutButton price={total} />
                    : (<span></span>)
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(CheckOutPage)