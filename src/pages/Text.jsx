import React from 'react';

const Text = ({ count, onTextChanged }) => {
    const handleInputChange = (event) => {
        onTextChanged(event.target.value); 
    };

    return (
        <>
            <input type="text" onChange={handleInputChange} />
            <p> Count: {count}</p>
        </>
    );
};

export default Text;
