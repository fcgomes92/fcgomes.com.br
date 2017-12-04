import React from 'react';
import PropTypes from 'prop-types';

export default class ScrollSpy extends React.Component {
    static propTypes = {
        defaultSection: PropTypes.string.isRequired,
        onSectionChange: PropTypes.func.isRequired,
        sections: PropTypes.array.isRequired,
    };

    static defaultProps = {
        sections: [],
    };

    componentDidMount() {
        this._setCurrentSection();
        window.addEventListener('scroll', this._setCurrentSection);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this._setCurrentSection);
    }

    _setCurrentSection = () => {
        const {sections} = this.props;
        const sectionCount = sections.length;

        if (!sectionCount) return;

        let currentSection = this.props.defaultSection ? sections[0].id : null;

        for (let i = 0; i < sectionCount; i++) {
            const section = sections[i];
            if (section) {
                if (window.pageYOffset > section.offsetTop) {
                    currentSection = section.id;
                }
            }
        }

        this.setState({currentSection}, () => {
            this.props.onSectionChange(currentSection)
        });
    };

    render() {
        return null;
    }
}