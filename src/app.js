import React         from 'react';
import ReactDOM      from 'react-dom';

import IndecisionApp from './components/IndecisionApp.js';
import 'normalize.css/normalize.css'; // make sure ALL browsers start at the same style base
import './styles/styles.scss';
//------------------imports----------------------------------------------------


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));