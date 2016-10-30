/**
 * Created by gomes on 24/10/16.
 */
import {Firebase} from '../settings';

export const FETCHING_CARDS = '_FETCHING_CARDS_';
export const FETCHED_CARDS = '_FETCHED_CARDS_';

export const fetchCards = () => {
    return (dispatch, getState) => {
        dispatch({
            type: FETCHING_CARDS
        });
        Firebase.database().ref('cards').once('value')
            .then((snapshot)=> {
                dispatch({
                    type: FETCHED_CARDS,
                    payload: {
                        cards: snapshot.val().map((card)=>(card)),
                    }
                })
            })
            .catch((err) => {
                console.log(err);
                return null;
            });
    }
};