import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { Provider } from 'react-redux'
import Hello from './hello';
import Count from './count';
import TodoList from './todo-list';
import reducers from './store/reducers';
import rootSaga from './store/saga';
import logo from './logo.svg';
import './App.css';

const sagaMiddleware = createSagaMiddleware();

let store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

// const action = type => store.dispatch({type})

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Hello name="大鹏"></Hello>
        <Count />
        <Provider store={store}>
          <TodoList />
        </Provider>
      </div>
    );
  }
}

export default App;
