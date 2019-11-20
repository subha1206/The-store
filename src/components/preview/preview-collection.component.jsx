import React from 'react';

import './preview-collection.styles.scss';

const CollectionPreview = ({ title, items }) => {
    return (
        <div className="preview-collection">
            <h1 className='title'>{title.toUpperCase()}</h1>
            <div className="preview">
                {items
                    .filter((item, idx) => idx < 4)
                    .map(item => (
                        <div kye={item.id}>
                           {item.name}
                        </div> 
                ))}
            </div>
        </div>
    )
}

export default CollectionPreview;