/**
 * Created by gomes on 22/02/17.
 */
import React, {Component, PropTypes} from 'react';
import {
    CLASS_UP,
    CLASS_DOWN,
    CLASS_RIGHT,
    CLASS_LEFT,
    CLASS_TO,
    CLASS_STARTER,
    CLASS_GRID,
    DATA_X_TO,
    DATA_Y_TO
} from './Grid';

const UP = 'up',
    DOWN = 'down',
    LEFT = 'left',
    RIGHT = 'right',
    UP_LEFT = 'up-left',
    UP_RIGHT = 'up-right',
    DOWN_LEFT = 'down-left',
    DOWN_RIGHT = 'down-right',
    GRID = 'grid',
    STARTER = 'starter',
    TO = 'to';

class Nav extends Component {
    static propTypes = {
        type: PropTypes.oneOf([UP, DOWN, LEFT, RIGHT, UP_LEFT, UP_RIGHT, DOWN_LEFT, DOWN_RIGHT, GRID, STARTER, TO,]),
        xTo: PropTypes.number,
        yTo: PropTypes.number,
        style: PropTypes.object,
        children: PropTypes.element,
    };

    static defaultProps = {
        style: {},
    };

    render() {
        const {type, children, style} = this.props;
        let className = '';
        let new_props = {};
        if (type === UP) {
            className = CLASS_UP;
        } else if (type === DOWN) {
            className = CLASS_DOWN;
        } else if (type === LEFT) {
            className = CLASS_LEFT;
        } else if (type === RIGHT) {
            className = CLASS_RIGHT;
        } else if (type === UP_LEFT) {
            className = `${CLASS_UP} ${CLASS_LEFT}`;
        } else if (type === UP_RIGHT) {
            className = `${CLASS_UP} ${CLASS_RIGHT}`;
        } else if (type === DOWN_RIGHT) {
            className = `${CLASS_DOWN} ${CLASS_RIGHT}`;
        } else if (type === DOWN_LEFT) {
            className = `${CLASS_DOWN} ${CLASS_LEFT}`;
        } else if (type === STARTER) {
            className = CLASS_STARTER;
        } else if (type === GRID) {
            className = CLASS_GRID;
        } else if (type === TO) {
            const {xTo, yTo} = this.props;
            className = CLASS_TO;
            new_props[DATA_X_TO] = xTo;
            new_props[DATA_Y_TO] = yTo;
        } else {
            className = '';
        }

        Object.assign(new_props, children.props);

        if (children.props.style) {
            Object.assign(new_props.style, children.props.style, style);
        } else {
            new_props.style = style;
        }

        if (!new_props.className) {
            new_props.className = '';
        }
        new_props.className = new_props.className.concat(` ${className}`).trim();

        return React.cloneElement(children, new_props);
    }
}

export default Nav;