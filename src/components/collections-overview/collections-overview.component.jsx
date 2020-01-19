import React from 'react'
import { selectCollectionsForPreview } from '../../redux/shop/shop.selector';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import PreviewCollection from '../../components/preview/preview-collection.component'

import './collections-overview.styles.scss'

const CollectionOverview = ({ collections }) => {
    return (
        <div className='collections-overview'>
             {
                 collections.map(({ id, ...otherColectionProps }) => (
                <PreviewCollection key={id} {...otherColectionProps} />
                ))
                }
        </div>
    )
}
const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})
export default connect(mapStateToProps)(CollectionOverview)