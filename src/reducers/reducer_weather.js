export default function(state = null, action){

	//Here payload contains the actial data from the api response instead of the promise object even if the action creator is returning promise object
	//This is due to redux-promise middleware. It checks if the payload has promise object, and constructs new action to be passed to reducers which contains resolved data
	console.log("action.payload :: ", action.payload)

	return state
}