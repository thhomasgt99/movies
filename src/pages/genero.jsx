import React, { useState, Fragment, useContext} from 'react'
import axios from 'axios'

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
		<Fragment>
			<h1 className='titleGenero'>{genero.name}</h1>
			<ul className='list-generos'>
				{
					data.map(item => (
						<li className='genero' key={item.id}>
							<a onClick={() => { localStorage(item.id) }} href="/movie"><img src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`} alt="" /></a>
							<p>{item.title}</p>
						</li>
					))
				}
			</ul>
		</Fragment>
	)
}