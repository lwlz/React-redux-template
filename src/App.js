import React, { PureComponent } from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Container from '@material-ui/core/Container';
import NavBar from './components/Navigation/NavBar';
import Home from './components/Home/Home';
import Articles from './components/Articles/Articles';
import Basket from './components/Basket/Basket';
import * as articlesActions from './actions/articlesActions';
import * as counterActions from './actions/counterActions';

import './sass/App.scss';

class App extends PureComponent {
    render() {
        const histories = this.props.history;
        return (
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <NavBar />
                <Container maxWidth='lg' style={{ marginTop: 70 }}>
                    <ConnectedRouter history={histories}>
                        <Switch>
                            <Route exact path='/' render={() => <Redirect to='/home' />} />
                            <Route path='/home' component={Home} />
                            <Route exact path='/articles' component={Articles} />
                            <Route exact path='/basket' component={Basket} />
                        </Switch>
                    </ConnectedRouter>
                </Container>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    counterRed: state.counterReducer,
    articlesRed: state.articlesReducer
});

const mapDispatchToProps = (dispatch) => ({
    counterActions: bindActionCreators(counterActions, dispatch),
    articlesActions: bindActionCreators(articlesActions, dispatch)
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
