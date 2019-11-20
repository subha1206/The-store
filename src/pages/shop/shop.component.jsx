import React from 'react';
import Shop_Data from './shop.data'
import CollectionPreview from '../../components/preview/preview-collection.component'


class ShopPage extends React.Component {
    constructor() {
        super()
        this.state = {
            collections: Shop_Data
        }
    }
    render() {
        const { collections } = this.state;
        return (
            <div className="shop-page">
                {
                 collections.map(({ id, ...otherColectionProps }) => (
                <CollectionPreview key={id} {...otherColectionProps} />
                ))
                }
            </div>
        )
    }
}

export default ShopPage;