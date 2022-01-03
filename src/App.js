import React, { useRef } from 'react';

const UseRefBasics = () => {
    const refContainer = useRef(null);
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(refContainer.current.value);
    };

    return <>
        <form className="form" onSubmit={handleSubmit}>
            <div className="form-group">
                <input type="text" ref={refContainer}/>
                <button type="submit" className="btn">Submit</button>
            </div>
        </form> 
    </>
};

export default UseRefBasics