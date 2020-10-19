import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root';
import thunk from 'redux-thunk';


// Redux 관련 불러오기
import { createStore, applyMiddleware} from 'redux';
import reducers from './reducers';
import './index.css';
// 스토어 생성
const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
    <Root store={store} />,
    document.getElementById('root')
);
