import React from 'react';
import {connect } from 'react-redux'
import { clearItem, addItem, removeItem } from '../../redux/cart/cart.actions'
import './checkout-item.styles.scss'


const CheckOutItem = ({ cartItem, clearItems, addItem, removeItem}) => {
    const {name, imageUrl, price, quantity} = cartItem
    return (
    <div className='checkout-item'>
        <div className='image-container'>
            <img src={imageUrl} alt='item' />
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>
            <div className='arrow' onClick={() => removeItem(cartItem)}>&#10094;</div>
             <span className='value'>{quantity}</span>
            <div className='arrow' onClick={() => addItem(cartItem)}>&#10095;</div>
        </span>
        <span className='price'>&#8377; {price}</span>
        {/* UTF_8 symbol */}
        <div className='remove-button' onClick={() => clearItems(cartItem)}>&#10005;</div> 
    </div>
)}

const mapDispatchToProps = dispatch => ({
    clearItems: item => dispatch(clearItem(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
})
export default connect(null,mapDispatchToProps)(CheckOutItem)