/**
 * Created by gomes on 16/10/16.
 */
import React, {Component, PropTypes} from 'react';
import AppBar from 'material-ui/AppBar';
import Header from '../Header';
import Cards from '../../containers/Cards';
import MyFooter from '../Footer';

class App extends Component {
    static propTypes = {
        children: PropTypes.node
    };

    render() {
        return (
            <div>
                <AppBar showMenuIconButton={false}/>
                <Header/>
                <Cards/>
                <footer>
                    <MyFooter/>
                </footer>
            </div>
        )
    };
}

App.propTypes = {};

export default App;