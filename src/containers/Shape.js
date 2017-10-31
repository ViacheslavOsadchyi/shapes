import React, {Component} from 'react';
import {connect} from 'react-redux';

import {removeShape} from '../actions';

class Shape extends Component{
	render() {
		let className = "shape";
		className += ` shape--form-${this.props.form}`;
		let style = {
			width: this.props.size + 'px',
			height: this.props.size + 'px',
			backgroundColor: this.props.color,
			left: this.props.position.x + 'px',
			top: this.props.position.y + 'px'
		};
		return 	<div className={className} style={style} onClick={(e)=>{
			e.stopPropagation();
			this.props.removeShape(this.props.id);
		}}>
		</div>
	}
}

function mapDispatchToProps(dispatch){
	return {
		removeShape: function(id){
			dispatch(removeShape(id));
		}
	}
}

export default connect(null,mapDispatchToProps)(Shape);