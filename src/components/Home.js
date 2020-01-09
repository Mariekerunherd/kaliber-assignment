import React from 'react';
import Header from './Header';
import Menu from './Menu';
import Hamburger from './Hamburger';
import Content from './Content';


export default class Home extends React.Component {
    
    constructor() {
        super();
        this.state = {
            prevY: 0,
            directionDown: true,
            onTop: true,
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll)
    }

    handleScroll = () => {
        var y = Math.round(window.scrollY);
        
        if (y > this.state.prevY) {
            this.setState({directionDown : true});
            this.setState({ prevY : y }) ;
        } else if (y < this.state.prevY) {
            this.setState({directionDown : false});
            this.setState({ prevY : y }) ;
        }
        y < 250 ? this.setState({onTop : true}) : this.setState({onTop : false});
    }

    render() {
        return(
            <div>
                <Header />
                { this.state.onTop || ( this.state.directionDown && <Hamburger />)}
                { this.state.onTop || ( this.state.directionDown || <Menu />)}
                <Content />
            </div>
        );
    };
};
