import React from 'react';
import PreviewCollection from '../../components/preview/preview-collection.component'
import { selectCollections } from '../../redux/shop/shop.selector';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'


const ShopPage = ({collections}) => {
        return (
            <div className="shop-page">
                {
                 collections.map(({ id, ...otherColectionProps }) => (
                <PreviewCollection key={id} {...otherColectionProps} />
                ))
                }
            </div>
        )
    
}

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
})
export default connect(mapStateToProps)(ShopPage);