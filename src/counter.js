import React from 'react';
import ReactDom from 'react-dom';



const Counter = ({counter, inc, dec, rnd}) => {

    return(
        <div className="jumbotron">
            <h2>{counter}</h2>
            <button onClick={dec}
                className="btn btn-primary btr-lg">DEC
            </button>
            <button onClick={inc}
                className="btn btn-primary btr-lg">INC
            </button>
            <button onClick={rnd}
                className="btn btn-primary btr-lg">RND
            </button>
        </div>
    )

}


export default Counter;