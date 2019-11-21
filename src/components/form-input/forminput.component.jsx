import React from 'react';

import './forminput.styles.scss';

const FromInput = ({ handelChange, label, ...otherprops }) => {
    return (
        <div className="group">
            {label ?
                    (<label className={`${otherprops.value.length ? 'shrink' : ''} from-input-label`}>
                        {label}
                    </label>)
            : null}
            <input className='form-input' onChange={handelChange} {...otherprops} />
            
        </div>
    )
}

export default FromInput;