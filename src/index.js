import React from 'react';
import ReactDOM  from 'react-dom';
import {Provider} from 'react-redux';

import Shapes from './containers/Shapes';
import store from './store';

import './css/shapesApp.css';

const shapesNodes = document.getElementsByClassName('shapesScene');

Array.prototype.forEach.call(shapesNodes, (el)=>{
	ReactDOM.render(
		<Provider store={store}>
    		<Shapes />
  		</Provider>, 
  		el
  	);
});