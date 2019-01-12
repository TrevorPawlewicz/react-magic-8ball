import React from 'react';
//------------------imports----------------------------------------------------

const Option = (props) => (
    <div className="option">
        <p className="option__text">{props.count}. {props.optionText}</p>
        <button
            className="button button--link"
            onClick={(e) => {
                // call function with text data:
                props.handleDeleteOption(props.optionText);
            }}>
            remove
        </button>
    </div>
);

export default Option;
//----------------------------Option-----------------------------------------