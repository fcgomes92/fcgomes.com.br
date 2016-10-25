/**
 * Created by gomes on 16/10/16.
 */
import React, {Component, PropTypes} from 'react';
import {Card, CardActions, CardMedia, CardTitle} from 'material-ui/Card';
import {FETCHING_CARDS, FETCHED_CARDS} from '../../actions/Cards'
import header from '../../static/img/working-with-coffee.jpg';

class Cards extends Component {
    static propTypes = {
        cards: PropTypes.array,
        fetchCards: PropTypes.func,
        children: PropTypes.node,
    };

    componentDidMount() {
        this.props.fetchCards();
    }

    renderCards() {
        if (!this.props.cards) {
            return null;
        }

        const styleCard = {
            marginBottom: "2em"
        };
        var counter = 0;
        const {cards} = this.props;
        return cards.map((card)=> (
                <div className="three columns" key={card.id} style={styleCard}>
                    <Card>
                        <CardMedia>
                            <img src="https://placeholdit.imgix.net/~text?txtsize=47&txt=500%C3%97500&w=1000&h=500"
                                 alt="placeholder"
                                 className="responsive-img"/>
                        </CardMedia>
                        <CardTitle title={card.title} subtitle={card.subtitle}/>
                        <CardActions>
                        </CardActions>
                    </Card>
                </div>
            )
        );
    }

    render() {
        return (
            <section className="section-fluid">
                <div className="container-fluid">
                    <div className="row title-row">
                        <h4>Cards</h4>
                    </div>
                    <div className="row">
                        <div className="full-height">
                            {this.renderCards()}
                        </div>
                    </div>
                </div>
            </section>
        )
    };
}

export default Cards;