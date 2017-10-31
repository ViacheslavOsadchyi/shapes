import React, {Component} from 'react';
import {connect} from 'react-redux';

import Shape from './Shape';
import {addShape, removeShape} from '../actions';

class Shapes extends Component{
	render() {
		const shapesElements = this.props.shapes.map(function(shapeProps){
			return <Shape key={shapeProps.id} {...shapeProps} />
		});
		return 	<div className="shapes" onClick={(e)=>{
					this.props.addShape({x:e.clientX,y:e.clientY});
				}}>
					{shapesElements}
				</div>
	}
}

function mapStateToProps(state){
	return {
		shapes: state.shapes
	}
}

function mapDispatchToProps(dispatch){
	return {
		addShape: function (position){
			dispatch(addShape(position));
		} 
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Shapes);