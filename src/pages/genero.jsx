import React, { useState, Fragment, useContext} from 'react'
import axios from 'axios'
import { Lista } from '../components/lista'

export function Genero() {
	const [data, setData] = useState([])
	const genero = JSON.parse(window.localStorage.getItem('genero'))
	console.log(genero)
	
	const Fetch = axios.create({
		baseURL: 'https://api.themoviedb.org/3/',
		params :{
			api_key: '745a988f14ecce994530896b7d912473',
			with_genres: genero.id
		}
	})
	function localStorage(dato) {
		return window.localStorage.setItem('identificador', dato)
	}

	React.useEffect(async () => {
		const {data} = await Fetch('discover/movie')
		setData(data.results)
	}, [])

	return (
		<Lista  genero={genero} data={data}/>
	)
}