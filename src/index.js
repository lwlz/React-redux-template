import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import history from './utils/history';
import { configureStore } from './store/configureStore';
import './sass/App.scss';
import App from './App';
// eslint-disable-next-line
const initialState = window.__REDUX_STATE__ || {};
const store = configureStore(initialState);

const renderApp = (Component) => {
    render(
        <BrowserRouter>
            <Provider store={store}>
                <Component history={history} />
            </Provider>
        </BrowserRouter>,
        document.getElementById('root')
    );
};

renderApp(App);
