// State argument is not application state.
// Only the state this reducer is responsible for
export default function(state = null, action) {
	console.log(JSON.stringify(action))
	switch(action.type) {
		case 'BOOK_SELECTED' : 
  			return action.payload;
	}
	return state
}