import axios from 'axios'

export function selectBook(book){
	return {type: 'BOOK_SELECTED', payload: book}	
}

const API_KEY = '3913a03d7e078f0b0d564357ab0b84c6'
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city){

	const url = `${ROOT_URL}&q=${city},us`
	const request = axios.get(url)

	return (dispatch, getState) => {
		request.then(response => {
			dispatch({
				type : FETCH_WEATHER,
				payload: response
			})
		})
	}
}