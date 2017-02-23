/**
 * Created by gomes on 22/02/17.
 */
/**
 * Created by gomes on 22/02/17.
 */
import React, {Component, PropTypes} from 'react';

class GridPanel extends Component {
    static propTypes = {
        x: PropTypes.string,
        y: PropTypes.string,
        defaultNavigation: PropTypes.bool,
        children: PropTypes.node,
    };

    static defaultProps = {
        x: 0,
        y: 0,
        defaultNavigation: false,
    };

    renderNav() {
        const {defaultNavigation} = this.props;
        if (defaultNavigation) {
            return (
                <div>
                    <span className="panel__nav panel__nav--up js-up">up</span>
                    <span className="panel__nav panel__nav--right-top js-up js-right">up/right</span>
                    <span className="panel__nav panel__nav--left-top js-up js-left">up/left</span>
                    <span className="panel__nav panel__nav--left js-left">left</span>
                    <span className="panel__nav panel__nav--right js-right">right</span>
                    <span className="panel__nav panel__nav--right-down js-down js-right">down/right</span>
                    <span className="panel__nav panel__nav--left-down js-down js-left">down/left</span>
                    <span className="panel__nav panel__nav--down js-down">down</span>
                    <span className="panel__zoom js-zoom">View All</span>
                </div>);
        }
        else {
            return '';
        }
    }

    render() {
        const {x, y, children} = this.props;
        const styles = {
            panel: {
                left: `${x}00%`,
                top: `${-y}00%`,
            },
        };
        return (
            <div className="panel" data-x-pos={x} data-y-pos={y} style={styles.panel}>
                {this.renderNav()}
                {children}
            </div>
        )
    }
}

export default GridPanel;