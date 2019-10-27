import React from 'react';
import loader from './loader.gif';

const Loader = () => {
    return (
        <div>
            <img 
                src={loader} 
                alt="Loading . . . "
                style={loaderStyle}
            />
        </div>
    )
}
const loaderStyle = {
    width: '200px',
    margin: '200px auto',
    display: 'block'
}
export default Loader;
