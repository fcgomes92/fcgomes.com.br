/**
 * Created by gomes on 16/10/16.
 */
import React, {Component, PropTypes} from 'react';
import {Grid, GridPanel, Nav} from '../Grid/index';
import FlatButton from 'material-ui/FlatButton';
import PortifolioCard from '../PortifolioCard';
import css from './index.css';
import s from '../../strings';

class App extends Component {
    static propTypes = {
        children: PropTypes.node
    };

    render() {
        const styles = {
            nameOverlayStyle: {backgroundColor: 'rgba(33,150,243,1)', color: '#FFF'},
            wrapperDiv: {backgroundColor: '#212121', height: '100%', minHeight: '300px', overflow: 'auto'},
            readMoreButton: {
                position: 'absolute', bottom: '0', left: '50%', transform: 'translateX(-50%)',
                width: '100%', textAlign: 'center', backgroundColor: 'rgba(33,33,33,.9)',
                zIndex: '2',
            },
            upButton: {
                position: 'absolute', width: '100%', backgroundColor: 'rgba(33,33,33,.9)', zIndex: '2',
            },
            welcomeTitle: {
                position: 'absolute',
                textAlign: 'center',
                width: '100%',
                top: '50%',
                transform: 'translate(0,-50%)',
            },
            welcomeTitleBanner: {
                magin: '1em 0',
                padding: '2em 0',
                backgroundColor: 'rgba(33,150,243,.5)',
            },
            welcomeLinks: {
                width: '100%',
                textAlign: 'center',
            },
            welcomeLinksText: {
                cursor: 'pointer',
            },
            about: {
                margin: '2em 0',
                padding: '2em',
                textAlign: 'center',
                position: 'relative',
            },
            contact: {
                position: 'absolute',
                textAlign: 'center',
                width: '100%',
                top: '50%',
                transform: 'translate(0,-50%)',
            },
            contactLinks: {
                width: '100%',
                textAlign: 'center',
            },
            portifolioImage: {
                maxHeight: '300px',
                width: 'auto',
                minWidth: 'auto',
                maxWidth: 'auto',
            }
        };

        return (
            <div>
                <Grid animation={'shrink'} startX={0} startY={0} onRef={ref => (this.grid = ref)}>
                    <GridPanel x={0} y={0} name={'HOME'} nameOverlayStyle={styles.nameOverlayStyle}>
                        <div style={styles.wrapperDiv}>
                            <div style={styles.welcomeTitle}>
                                <div className="row" style={styles.welcomeTitleBanner}>
                                    <h1>{s.strings.app.welcomeTitle.toUpperCase()}</h1>
                                    <span>FCGOMES.COM.BR</span>
                                </div>

                                <div className="row" style={styles.welcomeLinks}>
                                    <div className="four columns">
                                        <Nav type="to" xTo={0} yTo={-1}><span style={styles.welcomeLinksText}>About</span></Nav>
                                    </div>
                                    <div className="four columns">
                                        <Nav type="to" xTo={0} yTo={-2}><span className="batata" style={styles.welcomeLinksText}>Portifolio</span></Nav>
                                    </div>
                                    <div className="four columns">
                                        <Nav type="to" xTo={0} yTo={-3} style={styles.welcomeLinksText}><span>Contact</span></Nav>
                                    </div>
                                </div>
                            </div>

                            <Nav type="down">
                                <FlatButton style={styles.readMoreButton} label={s.strings.app.readMoreButton} secondary={true}/>
                            </Nav>
                        </div>
                    </GridPanel>
                    <GridPanel x={0} y={-1} name={'ABOUT'} nameOverlayStyle={styles.nameOverlayStyle}>
                        <div style={styles.wrapperDiv}>
                            <Nav type="up">
                                <FlatButton style={styles.upButton} label={'PREVIOUS'} secondary={true}/>
                            </Nav>
                            <div style={styles.about}>
                                <p>This is my (<a href="https://github.com/fcgomes92" target="_blank">@fcgomes92</a>) personal website where you can find things like my portifolio, my contacts and a little about me.</p>
                                <p>The whole site is built using <a href="https://facebook.github.io/react/" target="_blank">React</a> and <a href="http://www.material-ui.com/" target="_blank">Material-UI</a>. The 'grid' component, that makes the site look like this, was inspired by <a href="http://codepen.io/bradarnett/pen/dNEbzB" target="_blank">bradarnett</a>.</p>
                                <p>Besides some information about myself, this site contains some experiments using web technologies.</p>
                                <p style={{textAlign: 'center'}}>Hope you have fun. (:</p>
                            </div>
                            <div style={styles.readMoreButton}>
                                <Nav type="grid">
                                    <FlatButton label={'Grid'} secondary={true}/>
                                </Nav>
                                <Nav type="down">
                                    <FlatButton label={s.strings.app.next} secondary={true}/>
                                </Nav>
                                <Nav type="starter">
                                    <FlatButton label={'Home'} secondary={true}/>
                                </Nav>
                            </div>
                        </div>
                    </GridPanel>
                    <GridPanel x={0} y={-2} name={'PORTIFOLIO'} nameOverlayStyle={styles.nameOverlayStyle}>
                        <div style={styles.wrapperDiv}>
                            <Nav type="up">
                                <FlatButton style={styles.upButton} label={'PREVIOUS'} secondary={true}/>
                            </Nav>
                            <div style={styles.about}>
                                <p style={{textAlign: 'center'}}>In progress... (:</p>
                                <div className="row">
                                    <div className="four columns">
                                        <PortifolioCard
                                            backgroundImageCover={"https://unsplash.it/300/400/?random"}
                                            backgroundImageCoverHeight={"300px"}
                                            backgroundImageCoverWidth={"auto"}
                                            useOverlay={true}
                                            overlayTitle={'P1'}
                                            overlaySubtitle={'Portifolio 1'}
                                            useTitle={false}
                                            text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel urna lectus. Suspendisse id bibendum lectus, in consectetur lectus. Curabitur in metus eget nibh auctor fringilla sed eget mi. Etiam non metus ac metus cursus blandit. Curabitur at pharetra nibh. Nullam ac aliquam mauris. Duis tempus ipsum in mi feugiat, eget lobortis lacus condimentum.'}
                                            actions={[<FlatButton key="p1action" onClick={(e) => {
                                                this.grid.moveTo(1, -2)
                                            }} label={'Go to P1'} primary={true}/>,]}
                                        />
                                    </div>
                                    <div className="four columns">
                                        <PortifolioCard
                                            backgroundImageCover={"https://unsplash.it/400/400/?random"}
                                            backgroundImageCoverHeight={"300px"}
                                            backgroundImageCoverWidth={"auto"}
                                            useOverlay={true}
                                            overlayTitle={'P2'}
                                            overlaySubtitle={'Portifolio 2'}
                                            useTitle={false}
                                            text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel urna lectus. Suspendisse id bibendum lectus, in consectetur lectus. Curabitur in metus eget nibh auctor fringilla sed eget mi. Etiam non metus ac metus cursus blandit. Curabitur at pharetra nibh. Nullam ac aliquam mauris. Duis tempus ipsum in mi feugiat, eget lobortis lacus condimentum.'}
                                            actions={[<FlatButton key="p2action" onClick={(e) => {
                                                this.grid.moveTo(2, -2)
                                            }} label={'Go to P2'} primary={true}/>,]}
                                        />
                                    </div>
                                    <div className="four columns">
                                        <PortifolioCard
                                            backgroundImageCover={"https://unsplash.it/500/450/?random"}
                                            backgroundImageCoverHeight={"300px"}
                                            backgroundImageCoverWidth={"auto"}
                                            useOverlay={true}
                                            overlayTitle={'P3'}
                                            overlaySubtitle={'Portifolio 3'}
                                            useTitle={false}
                                            text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel urna lectus. Suspendisse id bibendum lectus, in consectetur lectus. Curabitur in metus eget nibh auctor fringilla sed eget mi. Etiam non metus ac metus cursus blandit. Curabitur at pharetra nibh. Nullam ac aliquam mauris. Duis tempus ipsum in mi feugiat, eget lobortis lacus condimentum.'}
                                            actions={[<FlatButton key="p3action" onClick={(e) => {
                                                this.grid.moveTo(3, -2)
                                            }} label={'Go to P3'} primary={true}/>,]}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div style={styles.readMoreButton}>
                                <Nav type="grid">
                                    <FlatButton label={'Grid'} secondary={true}/>
                                </Nav>
                                <Nav type="down">
                                    <FlatButton label={s.strings.app.next} secondary={true}/>
                                </Nav>
                                <Nav type="starter">
                                    <FlatButton label={'Home'} secondary={true}/>
                                </Nav>
                            </div>
                        </div>
                    </GridPanel>
                    <GridPanel x={1} y={-2} name={'PORTIFOLIO 1'} nameOverlayStyle={styles.nameOverlayStyle}>
                        <div style={styles.wrapperDiv}>
                            <div style={styles.about}>
                                <p style={{textAlign: 'center'}}>In progress... (:</p>
                                <p>P1</p>
                            </div>
                            <div style={styles.readMoreButton}>
                                <Nav type="left">
                                    <FlatButton label={s.strings.app.previous} secondary={true}/>
                                </Nav>
                                <Nav type="grid">
                                    <FlatButton label={'Grid'} secondary={true}/>
                                </Nav>
                                <Nav type="starter">
                                    <FlatButton label={'Home'} secondary={true}/>
                                </Nav>
                                <Nav type="right">
                                    <FlatButton label={s.strings.app.next} secondary={true}/>
                                </Nav>
                            </div>
                        </div>
                    </GridPanel>
                    <GridPanel x={2} y={-2} name={'PORTIFOLIO 2'} nameOverlayStyle={styles.nameOverlayStyle}>
                        <div style={styles.wrapperDiv}>
                            <div style={styles.about}>
                                <p style={{textAlign: 'center'}}>In progress... (:</p>
                                <p>P2</p>
                            </div>
                            <div style={styles.readMoreButton}>
                                <Nav type="left">
                                    <FlatButton label={s.strings.app.previous} secondary={true}/>
                                </Nav>
                                <Nav type="grid">
                                    <FlatButton label={'Grid'} secondary={true}/>
                                </Nav>
                                <Nav type="starter">
                                    <FlatButton label={'Home'} secondary={true}/>
                                </Nav>
                                <Nav type="right">
                                    <FlatButton label={s.strings.app.next} secondary={true}/>
                                </Nav>
                            </div>
                        </div>
                    </GridPanel>
                    <GridPanel x={3} y={-2} name={'PORTIFOLIO 3'} nameOverlayStyle={styles.nameOverlayStyle}>
                        <div style={styles.wrapperDiv}>
                            <div style={styles.about}>
                                <p style={{textAlign: 'center'}}>In progress... (:</p>
                                <p>P3</p>
                            </div>
                            <div style={styles.readMoreButton}>
                                <Nav type="left">
                                    <FlatButton label={s.strings.app.previous} secondary={true}/>
                                </Nav>
                                <Nav type="grid">
                                    <FlatButton label={'Grid'} secondary={true}/>
                                </Nav>
                                <Nav type="starter">
                                    <FlatButton label={'Home'} secondary={true}/>
                                </Nav>
                            </div>
                        </div>
                    </GridPanel>
                    <GridPanel x={0} y={-3} name={'CONTACT'} nameOverlayStyle={styles.nameOverlayStyle}>
                        <div style={styles.wrapperDiv}>
                            <Nav type="up">
                                <FlatButton style={styles.upButton} label={'PREVIOUS'} secondary={true}/>
                            </Nav>
                            <div style={styles.readMoreButton}>
                                <Nav type="grid">
                                    <FlatButton label={'Grid'} secondary={true}/>
                                </Nav>
                                <Nav type="starter">
                                    <FlatButton label={'Home'} secondary={true}/>
                                </Nav>
                            </div>
                            <div style={styles.contact}>
                                <div className="row">
                                    <h1>Contact</h1>
                                </div>
                                <div className="row" style={styles.contactLinks}>
                                    <div className="four columns">
                                        <icon style={{display: 'block'}} className="fa fa-github-alt fa-2x"></icon>
                                        <a className="white-link" href="https://github.com/fcgomes92" target="_blank">@fcgomes92</a>
                                    </div>
                                    <div className="four columns">
                                        <icon style={{display: 'block'}} className="fa fa-envelope fa-2x"></icon>
                                        <a className="white-link" href="mailto:fcgomes.92@gmail.com" target="_blank">fcgomes.92@gmail.com</a>
                                    </div>
                                    <div className="four columns">
                                        <icon style={{display: 'block'}} className="fa fa-twitter fa-2x"></icon>
                                        <a className="white-link" href="https://twitter.com/fcgomes92" target="_blank">@fcgomes92</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </GridPanel>
                </Grid>
            </div>
        )
    };
}

export default App;