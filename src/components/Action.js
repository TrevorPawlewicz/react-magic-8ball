import React from 'react';
//------------------imports----------------------------------------------------

// const Action = (props) => {
//     return (
//         <div>
//             <button onClick={props.handlePick} disabled={!props.hasOptions}>
//                 What should I do?
//             </button>
//         </div>
//     );
// }

const Action = (props) => (
    <div>
        <button 
            className="big-button" 
            onClick={props.handlePick} 
            disabled={!props.hasOptions}
        >
            What should I do?
        </button>
    </div>
);

export default Action;