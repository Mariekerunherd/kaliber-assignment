import React from 'react';

import Button from './Button';

const Header = (props) => (
    <div className="header">
        <div className="container">
            <div className={'header-box'}>
                <div className={'title'}>{props.title}</div>
                <div className={'menu'}>
                    <Button buttonText={props.button1}/>
                    <Button buttonText={props.button2}/>
                    <Button buttonText={props.button3}/>
                    <Button buttonText={props.button4}/>
                    <Button buttonText={props.button5}/>
                    <Button buttonText={props.button6}/>
                </div>
            </div>
        </div>
    </div>
);

Header.defaultProps = {
    title: 'Dolorum',
    button1: 'lorum',
    button2: 'ipsum',
    button3: 'dolor',
    button4: 'sit',
    button5: 'amet',
    button6: 'consectetur',
};

export default Header;