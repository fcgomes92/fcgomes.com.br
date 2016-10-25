/**
 * Created by gomes on 16/10/16.
 */
import React, {Component, PropTypes} from 'react';

class MyFooter extends Component {
    static propTypes = {
        children: PropTypes.node
    };

    render() {
        return (
            <div className="footer">
                <section className="info">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="four columns">
                                <div className="title">Workplace</div>
                            </div>
                            <div className="four columns">
                                <div className="title">Contact</div>
                            </div>
                            <div className="four columns">
                                <div className="title">Random Quote</div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="last-line">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="six columns centered">
                                <a href="http://www.freepik.com/free-photos-vectors/computer">Computer vector designed
                                    by
                                    Freepik</a>
                            </div>
                            <div className="six columns centered">

                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    };
}

MyFooter.propTypes = {};

export default MyFooter;