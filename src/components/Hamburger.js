import React from 'react';

const Hamburger = (props) => (
    <div className="hamburger-container">
        <div className={'hamburger-title'}>{props.title}</div>
        <div className={'hamburger-button'}>
            <div className={'stripe'}></div>
            <div className={'stripe'}></div>
            <div className={'stripe'}></div>
        </div>
    </div>
);

Hamburger.defaultProps = {
    title: 'Dolorum',
};

export default Hamburger;