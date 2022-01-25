import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Hook from './component/Hook';
import UseEffectHook from "./component/UseEffectHook"
import DummyFunc from './component/DummyFunc';
import DummyClass from './component/DummyClass';


ReactDOM.render(
  <div>
<DummyClass></DummyClass>
<DummyClass></DummyClass>
<Hook></Hook>
</div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
