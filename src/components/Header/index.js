/**
 * Created by gomes on 16/10/16.
 */
import React, {Component, PropTypes} from 'react';
import header from '../../static/img/working-with-coffee.jpg';

class Header extends Component {
    static propTypes = {
        children: PropTypes.node
    };

    render() {
        return (
            <div className="full-height-header">
                <div className="content">
                    <h1>HEADER</h1>
                </div>
                <div className="content-sub-header">
                    <span>FCGOMES.COM.BR!</span>
                </div>
                <img src={header} alt="header+image"/>
            </div>
        )
    };
}

Header.propTypes = {};

export default Header;