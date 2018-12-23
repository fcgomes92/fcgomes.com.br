import React, {Component} from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';

class LoaderComponent extends Component {
    static propTypes = {
        size: PropTypes.string,
        show: PropTypes.bool,
        primary: PropTypes.bool,
        accent: PropTypes.bool,
        className: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
    };

    static defaultProps = {
        width: '2em',
        height: '2em',
        classNames: "",
        show: true,
        primary: true,
        accent: false,
    };

    render() {
        const cls = classNames("loader", this.props.className, {
            "loader--accent": this.props.accent,
        });
        return (<div className={cls} style={{
            display: this.props.show
                ? 'block'
                : 'none',
            width: this.props.size,
            height: this.props.size
        }}/>)
    }
}

export default LoaderComponent;
