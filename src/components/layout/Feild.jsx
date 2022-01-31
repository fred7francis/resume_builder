import React from 'react';

function Feild({ isEdit, label, ...rest }) {
    return <div className='form-group'>
        <label className='font-weight-bold mb-1'>{label}</label>
        {isEdit ? <input {...rest} className='w-100 form-control' />
            : <div className="feild-value">{rest.value}</div>
        }
    </div>;
}

export default Feild;
