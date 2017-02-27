/**
 * Created by gomes on 26/02/17.
 */
import React, {Component, PropTypes} from 'react';
import FlatButton from 'material-ui/FlatButton';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

class PortifolioCard extends Component {
    static propTypes = {
        backgroundImageCover: PropTypes.string,
        backgroundImageCoverHeight: PropTypes.string,
        backgroundImageCoverWidth: PropTypes.string,
        backgroundImage: PropTypes.object,
        useTitle: PropTypes.bool,
        cardTitle: PropTypes.string,
        cardSubtitle: PropTypes.string,
        useOverlay: PropTypes.bool,
        overlayTitle: PropTypes.string,
        overlaySubtitle: PropTypes.string,
        text: PropTypes.string,
        actions: PropTypes.array,
    };

    static defaultProps = {
        backgroundImageCover: undefined,
        useTitle: true,
        useOverlay: false,
    };

    renderCardMedia() {
        const {backgroundImage, useOverlay, overlaySubtitle, overlayTitle} = this.props;
        if (this.props.backgroundImageCover) {
            return this.renderCardMediaBackgoundCover();
        }
        if (useOverlay) {
            return (<CardMedia
                overlay={<CardTitle title={overlayTitle} subtitle={overlaySubtitle}/>}>
                {backgroundImage}
            </CardMedia>)
        }
        else {
            return (<CardMedia>{backgroundImage}</CardMedia>)
        }
    }

    renderCardMediaBackgoundCover() {
        const {
            backgroundImageCover, backgroundImageCoverHeight, backgroundImageCoverWidth,
            useOverlay, overlaySubtitle, overlayTitle
        } = this.props;
        const styles = {
            backgroundImage: `url(${backgroundImageCover})`,
            backgroundSize: 'cover',
            height: backgroundImageCoverHeight,
            width: backgroundImageCoverWidth,
        };
        if (useOverlay) {
            return (<CardMedia style={styles}
                               overlay={<CardTitle title={overlayTitle} subtitle={overlaySubtitle}/>}/>)
        }
        else {
            return (<CardMedia style={styles}/>)
        }
    }

    renderCardTitle() {
        const {useTitle, cardTitle, cardSubtitle} = this.props;
        return useTitle ? <CardTitle title={cardTitle} subtitle={cardSubtitle}/> : '';
    }


    render() {
        const {text, actions,} = this.props;


        return (
            <Card>
                {this.renderCardMedia()}
                {this.renderCardTitle()}
                <CardText>
                    {text}
                </CardText>
                <CardActions>
                    {actions}
                </CardActions>
            </Card>
        )
    }
}

export default PortifolioCard;