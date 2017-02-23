/**
 * Created by gomes on 16/10/16.
 */
import React, {Component, PropTypes} from 'react';
import FlatButton from 'material-ui/FlatButton';
import {Grid, GridPanel, Nav} from '../Grid/index';

class App extends Component {
    static propTypes = {
        children: PropTypes.node
    };

    render() {
        return (
            <div>
                <Grid animation={'none'}>
                    <GridPanel x={0} y={0}>
                        <div style={{backgroundColor: '#212121', height: '100%'}}>
                        <Nav type="grid"><FlatButton label={'GRID'} primary={true}/></Nav>
                        <br/>
                        <Nav type="up"><FlatButton label={'UP'} secondary={true}/></Nav>
                        </div>
                    </GridPanel>
                    <GridPanel defaultNavigation={true} x={1} y={0}><h1>0-1</h1></GridPanel>
                    <GridPanel defaultNavigation={true} x={0} y={1}><h1>1-0</h1></GridPanel>
                    <GridPanel defaultNavigation={true} x={1} y={1}><h1>1-1</h1></GridPanel>
                    <GridPanel defaultNavigation={true} x={-1} y={0}><h1>0-1</h1></GridPanel>
                    <GridPanel defaultNavigation={true} x={0} y={-1}><h1>1-0</h1></GridPanel>
                    <GridPanel defaultNavigation={true} x={-1} y={-1}><h1>-1-1</h1></GridPanel>
                    <GridPanel defaultNavigation={true} x={1} y={-1}><h1>-1-1</h1></GridPanel>
                    <GridPanel defaultNavigation={true} x={-1} y={1}><h1>-1-1</h1></GridPanel>
                </Grid>
            </div>
        )
    };
}

export default App;