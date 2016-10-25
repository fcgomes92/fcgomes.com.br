/**
 * Created by gomes on 24/10/16.
 */
import {FETCHED_CARDS, FETCHING_CARDS} from '../actions/Cards';

const cardsInitialState = {
    status: null,
    cards: null,
};

export const cards = (state = cardsInitialState, action) => {
    switch (action.type) {
        case FETCHING_CARDS:
            return {status: FETCHING_CARDS, cards: null};
        case FETCHED_CARDS:
            return {status: FETCHED_CARDS, cards: action.payload.cards};
        default:
            return state;
    }
};