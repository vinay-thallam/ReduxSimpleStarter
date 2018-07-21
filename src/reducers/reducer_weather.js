import { FETCH_WEATHER } from '../actions/index'

export default function(state = [], action){

	//Here payload contains the actial data from the api response instead of the promise object even if the action creator is returning promise object
	//This is due to redux-promise middleware. It checks if the payload has promise object, and constructs new action to be passed to reducers which contains resolved data
	console.log("action.payload :: ", action.payload)
	switch(action.type) {
		case FETCH_WEATHER :
			//state should never be manipulated/mutated. i.e you should not do state.push(action.payload.data) here.
			//Always return a new state. concat here returns a new array. it does not modify the existing array
			return [action.payload.data].concat(state)
	}
	return state
}