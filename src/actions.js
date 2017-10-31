export const ADD_SHAPE = 'ADD_SHAPE';
export const REMOVE_SHAPE = 'REMOVE_SHAPE';


export function addShape(position) {
	return {
		type: 		ADD_SHAPE,
		position: 	position
	}
}

export function removeShape(id) {
	return {
		type: 	REMOVE_SHAPE,
		id: 	id
	}
}