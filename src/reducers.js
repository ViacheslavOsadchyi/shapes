import {ADD_SHAPE, REMOVE_SHAPE} from './actions';

export const initialState = {
	shapes: []
};

export function shapesApp(state, action) {
	let shapes = state.shapes.slice();
	let index;
	if (typeof state === undefined){
		return initialState;
	}
	switch (action.type){
		case ADD_SHAPE:
			shapes.push(generateShape(action.position));
			return Object.assign({},state,{
				shapes: shapes 
			});
			break;
		case REMOVE_SHAPE:
			index = shapes.findIndex(function(currentValue){
						if (currentValue.id === action.id){
							return true;
						}
						return false;
					});
			shapes.splice(index,1);
			return Object.assign({},state,{
				shapes: shapes
			})
	}
	return state;
}

function generateShape(position){
	const availableShapes = ['circle','square'];
	const form = randomElement(availableShapes);
	const size = form == 'circle' ? randomInt(30,200) : randomInt(20,150);
	return {
		id: 		'shape' + Math.random().toString(36).substr(2, 6),
		form: 		form,
		color: 		randomColor(),
		size: 		size,
		position: 	position
	}
}

function randomElement(arr){
    return arr[Math.floor(Math.random() * arr.length)];
}

function randomColor(){
	return "#"+((1<<24)*Math.random()|0).toString(16);
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}