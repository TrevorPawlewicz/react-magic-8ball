import React from 'react';
//------------------imports----------------------------------------------------


// use a Stateless Functional Component for classes that just call render()!!!
const Header = (props) => (
    <div className="header">
        <div className="container">
            <h1 className="header__title">{props.title}</h1>
            {props.subtitle && <h3 className="header__subtitle">{props.subtitle}</h3>}
        </div>
    </div>
);

// set up default prop values with the keyword: defaultProps
Header.defaultProps = {
    title: 'Indecision'
}

export default Header;