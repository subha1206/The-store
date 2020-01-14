import React from 'react';
import CollectionItem from '../../components/collection_item/collection_item.component'
import { connect } from 'react-redux'
import { selectSingleCollection } from '../../redux/shop/shop.selector'

import './collection.styles.scss'

const CollectionPage = ({ collection}) => {
    console.log(collection)
    return (
        <div className='collection-page'>
            <h1>HEllloo</h1 >
        </div>
    )
}

const mapStateToProps = (state, ownProps) => ({
   collection: selectSingleCollection(ownProps.match.params.collectionId)(state)
})
export default connect(mapStateToProps, null)(CollectionPage);