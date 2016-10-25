/**
 * Created by gomes on 24/10/16.
 */
import Cards from '../components/Cards';
import {connect} from 'react-redux';
import {fetchCards} from '../actions/Cards';

const mapStateToProps = (state, ownProps) => ({
    cards: state.cards.cards
});

export default connect(mapStateToProps, {
    fetchCards
})(Cards)
