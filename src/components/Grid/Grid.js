/**
 * Created by gomes on 22/02/17.
 */
import React, {Component, PropTypes} from 'react';
import {hasClass, addClass, removeClass} from './util';

// classes
const CLASS_SITE_WRAP = 'site-wrap',
    CLASS_PANEL_WRAP = 'panel-wrap',
    CLASS_PANEL = 'panel',
    CLASS_PANEL_NAME = '_panel-wrapper-name',
    CLASS_ZOOM = 'js-zoom',
    CLASS_UP = 'js-up',
    CLASS_DOWN = 'js-down',
    CLASS_RIGHT = 'js-right',
    CLASS_LEFT = 'js-left',
    CLASS_TO = 'js-to',
    CLASS_STARTER = 'js-starter',
    CLASS_ANIMATION = 'js-animation',
    CLASS_GRID = 'js-zoom',
    CLASS_SHOW_ALL = 'show-all';

export {
    CLASS_SITE_WRAP,
    CLASS_PANEL_WRAP,
    CLASS_PANEL,
    CLASS_ZOOM,
    CLASS_UP,
    CLASS_DOWN,
    CLASS_RIGHT,
    CLASS_LEFT,
    CLASS_TO,
    CLASS_STARTER,
    CLASS_ANIMATION,
    CLASS_GRID
}

const DATA_X_POS = 'data-x-pos',
    DATA_Y_POS = 'data-y-pos',
    DATA_X_TO = 'data-x-to',
    DATA_Y_TO = 'data-y-to';

export {DATA_X_POS, DATA_Y_POS, DATA_X_TO, DATA_Y_TO}

// Elements
let site = document.getElementsByClassName(CLASS_SITE_WRAP)[0];
let wrap = document.getElementsByClassName(CLASS_PANEL_WRAP)[0];

let panel = document.getElementsByClassName(CLASS_PANEL),
    panelName = document.getElementsByClassName(CLASS_PANEL_NAME);

let zoom = document.getElementsByClassName(CLASS_ZOOM);

let nav_up = document.getElementsByClassName(CLASS_UP),
    nav_left = document.getElementsByClassName(CLASS_LEFT),
    nav_right = document.getElementsByClassName(CLASS_RIGHT),
    nav_down = document.getElementsByClassName(CLASS_DOWN),
    nav_to = document.getElementsByClassName(CLASS_TO),
    jsCenter = document.getElementsByClassName(CLASS_STARTER);

let animation = document.getElementsByClassName(CLASS_ANIMATION);

// Global Functions
class Grid extends Component {
    static propTypes = {
        startX: PropTypes.number,
        startY: PropTypes.number,
        animation: PropTypes.oneOf(['none', 'shrink']),
        children: PropTypes.node,
    };

    static defaultProps = {
        startX: 0,
        startY: 0,
        animation: 'none',
    };

    constructor(props) {
        super(props);
        this.state = {
            x: -props.startX,
            y: props.startY,
        };
        this.moveDown = this.moveDown.bind(this);
        this.moveUp = this.moveUp.bind(this);
        this.moveRight = this.moveRight.bind(this);
        this.moveLeft = this.moveLeft.bind(this);
        this.moveTo = this.moveTo.bind(this);
        this.zoomIn = this.zoomIn.bind(this);
        this.zoomOut = this.zoomOut.bind(this);
        this.center = this.center.bind(this);
        this.setPanelAndZoom = this.setPanelAndZoom.bind(this);
    }

    setXY(x, y) {
        this.setState({
            x: parseInt(x), y: parseInt(y),
        });
    }

    incrementX() {
        this.setState({x: this.state.x + 1});
    }

    decrementX() {
        this.setState({x: this.state.x - 1});
    }

    incrementY() {
        this.setState({y: this.state.y + 1});
    }

    decrementY() {
        this.setState({y: this.state.y - 1});
    }

    setPos(time = 250) {
        const {x, y} = this.state;
        wrap.style.transform = 'translateX(' + x + '00%) translateY(' + y + '00%)';
        wrap.style.transitionDuration = `${time}ms`;
        setTimeout(() => {
            removeClass(wrap, 'animate');
        }, 600);
    }

    moveUp() {
        addClass(wrap, 'animate');
        this.incrementY();
        this.setPos();
    }

    moveLeft() {
        addClass(wrap, 'animate');
        this.incrementX();
        this.setPos();
    }

    moveRight() {
        addClass(wrap, 'animate');
        this.decrementX();
        this.setPos();
    }

    moveDown() {
        addClass(wrap, 'animate');
        this.decrementY();
        this.setPos();
    }

    zoomOut(e) {
        e.stopPropagation();
        addClass(site, CLASS_SHOW_ALL);
        for (let x = 0; x < panel.length; x++) {
            panel[x].addEventListener('click', this.setPanelAndZoom);
        }
        for (let x = 0; x < panelName.length; x++) {
            panelName[x].addEventListener('click', this.setPanelAndZoom);
        }
    }

    setPanelAndZoom(e) {
        this.setXY(-e.target.getAttribute(DATA_X_POS), e.target.getAttribute(DATA_Y_POS));
        this.setPos(400);
        this.zoomIn();
    }

    zoomIn() {
        for (let x = 0; x < panel.length; x++) {
            panel[x].removeEventListener('click', this.setPanelAndZoom);
        }
        for (let x = 0; x < panelName.length; x++) {
            panelName[x].removeEventListener('click', this.setPanelAndZoom);
        }

        removeClass(site, CLASS_SHOW_ALL);
    }

    center() {
        addClass(wrap, 'animate');
        this.setXY(this.props.startX, this.props.startY);
        this.setPos();
    }

    moveTo(e) {
        addClass(wrap, 'animate');
        this.setXY(-e.target.getAttribute(DATA_X_TO), e.target.getAttribute(DATA_Y_TO));
        this.setPos();
    }

    componentDidMount() {
        site = document.getElementsByClassName(CLASS_SITE_WRAP)[0];
        wrap = document.getElementsByClassName(CLASS_PANEL_WRAP)[0];
        panel = document.getElementsByClassName(CLASS_PANEL);
        panelName = document.getElementsByClassName(CLASS_PANEL_NAME);
        zoom = document.getElementsByClassName(CLASS_ZOOM);
        nav_up = document.getElementsByClassName(CLASS_UP);
        nav_left = document.getElementsByClassName(CLASS_LEFT);
        nav_right = document.getElementsByClassName(CLASS_RIGHT);
        nav_down = document.getElementsByClassName(CLASS_DOWN);
        nav_to = document.getElementsByClassName(CLASS_TO);
        jsCenter = document.getElementsByClassName(CLASS_STARTER);
        animation = document.getElementsByClassName(CLASS_ANIMATION);

        this.setPos();

        for (let x = 0; x < nav_up.length; x++) {
            nav_up[x].addEventListener('click', this.moveUp);
        }

        for (let x = 0; x < nav_left.length; x++) {
            nav_left[x].addEventListener('click', this.moveLeft);
        }

        for (let x = 0; x < nav_right.length; x++) {
            nav_right[x].addEventListener('click', this.moveRight);
        }

        for (let x = 0; x < nav_down.length; x++) {
            nav_down[x].addEventListener('click', this.moveDown);
        }

        for (let x = 0; x < zoom.length; x++) {
            zoom[x].addEventListener('click', this.zoomOut);
        }

        for (let x = 0; x < jsCenter.length; x++) {
            jsCenter[x].addEventListener('click', this.center);
        }

        for (let x = 0; x < nav_to.length; x++) {
            nav_to[x].addEventListener('click', this.moveTo);
        }
    }

    render() {
        const {animation, children} = this.props;
        return (
            <div className={CLASS_SITE_WRAP}>
                <div className={`${CLASS_PANEL_WRAP} animate--${animation}`}>
                    {children}
                </div>
            </div>
        )
    }
}

export default Grid;