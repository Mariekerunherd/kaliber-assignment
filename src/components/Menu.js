import React from 'react';

import Button from './Button';

const Menu = (props) => (
    <div className="menu-container">
        <div className={'menu-box'}>
            <div className={'menu-title'}>{props.title}</div>
            <div className={'menu-buttons'}>
                <Button buttonText={props.button1}/>
                <Button buttonText={props.button2}/>
                <Button buttonText={props.button3}/>
                <Button buttonText={props.button4}/>
                <Button buttonText={props.button5}/>
                <Button buttonText={props.button6}/>
            </div>
        </div>
    </div>
);

Menu.defaultProps = {
    title: 'Dolorum',
    button1: 'lorum',
    button2: 'ipsum',
    button3: 'dolor',
    button4: 'sit',
    button5: 'amet',
    button6: 'consectetur',
};

export default Menu;