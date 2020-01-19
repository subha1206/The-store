import React from 'react';
import CollectionItem from '../../components/collection_item/collection_item.component'
import { connect } from 'react-redux'
import { selectSingleCollection } from '../../redux/shop/shop.selector'

import './collection.styles.scss'

const CollectionPage = ({ collection }) => {
   const { title, items } = collection
    return (
        <div className='collection-page'>
           <h2 className='title'>{ title }</h2>
           <div className='items'>
             {
                 items.map(item => <CollectionItem  key={item.id} item={item}/>)
             }
           </div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => ({
   collection: selectSingleCollection(ownProps.match.params.collectionId)(state)
})
export default connect(mapStateToProps, null)(CollectionPage);